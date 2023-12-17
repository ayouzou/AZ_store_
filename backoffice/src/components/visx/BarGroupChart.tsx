import React, { useContext } from 'react';
import { Group } from '@visx/group';
import { BarGroup } from '@visx/shape';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { localPoint } from '@visx/event';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { getKeys } from './utils/shared/getKeys';
import { formatData } from './utils/shared/formatData';
import { getMinAndMax } from './utils/shared/getMinAndMax';
import { ThemeContext } from './context/theme';
import ToolTip from './shared/ToolTip'
import Legends from './shared/Legends';

type TooltipData = {
    index: number;
    key: string;
    value: number;
    width: number;
    x: number;
    y: number;
    color: string;
    height: number;
}
export type BarGroupProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    events?: boolean;
    data: any;
    keys: string[],
    theme?: Record<string, string>
};

const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };
const tooltipStyles = {
    ...defaultStyles,
    minWidth: 100,
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'white',
};

let tooltipTimeout: number;

function BarGroupChart({
    width,
    height,
    margin = defaultMargin,
    data,
    keys,

}: BarGroupProps) {
    const { theme } = useContext(ThemeContext)

    const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } =
        useTooltip<TooltipData>();

    const { containerRef, TooltipInPortal } = useTooltipInPortal({
        // TooltipInPortal is rendered in a separate child of <body /> and positioned
        // with page coordinates which should be updated on scroll. consider using
        // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
        scroll: true,
    });

    const keys_ = getKeys(data, keys)
    const formatedData = formatData(data)
    const magicParam = Object.keys(formatedData[0])[0]
    const getXParam = (d: any) => d[magicParam]
    const [, yMax] = getMinAndMax(formatedData)
    const colorScale = scaleOrdinal<string, string>({
        domain: keys_,
        // let's get the values from the theme object but ignore the first one (the background color)
        // range: ['#fff', '#eee'],
        // give me some cool hex code colors here not from my theme object:

        range: [
            '#f4bb14',
            'skyBlue',
            'orange',
            'rgba(255,255,255,0.4)',
            'red',
            'red',
            'red',
        ],


    });
    const X0Scale = scaleBand<string>({
        domain: formatedData.map(getXParam),
        padding: 0.2,
    });
    const X1Scale = scaleBand<string>({
        domain: keys_,
        padding: 0.1,
    });

    const YScale = scaleLinear<number>({
        domain: [0, yMax],
        range: [yMax, 0],
    });

    // bounds
    const xDimensionMax = width - margin.left - margin.right;
    const yDimensionMax = height - margin.top - margin.bottom;
    const legendsHeight = 50;

    // update scale output dimensions
    X0Scale.rangeRound([0, xDimensionMax]);
    X1Scale.rangeRound([0, X0Scale.bandwidth()]);
    YScale.rangeRound([yDimensionMax, 0]);

    return (
        <div className='h-screen relative flex flex-col' ref={containerRef}>
            <svg width={width} height={height + legendsHeight} >
                <rect x={0} y={0} width={width} height={height + legendsHeight} rx={14} />
                <Group top={margin.top + 10} left={margin.left} >
                    <BarGroup
                        data={formatedData}
                        keys={keys_}
                        height={yDimensionMax}
                        x0={getXParam}
                        x0Scale={X0Scale}
                        x1Scale={X1Scale}
                        yScale={YScale}
                        color={colorScale}
                    >
                        {(barGroups) =>
                            barGroups.map((barGroup) => {
                                return (<Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={barGroup.x0}>
                                    {barGroup.bars.map((bar) => (
                                        <rect
                                            className='cursor-pointer'
                                            key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                                            x={bar.x}
                                            y={bar.y}
                                            width={bar.width}
                                            height={bar.height}
                                            fill={bar.color}
                                            rx={4}
                                            onMouseLeave={() => {
                                                tooltipTimeout = window.setTimeout(() => {
                                                    hideTooltip();
                                                }, 300);
                                            }}
                                            onMouseMove={(event) => {
                                                if (tooltipTimeout) clearTimeout(tooltipTimeout);
                                                // TooltipInPortal expects coordinates to be relative to containerRef
                                                // localPoint returns coordinates relative to the nearest SVG, which
                                                // is what containerRef is set to in this example.
                                                const eventSvgCoords = localPoint(event);
                                                showTooltip({
                                                    tooltipData: bar,
                                                    tooltipTop: eventSvgCoords?.y,
                                                    tooltipLeft: eventSvgCoords?.x,
                                                });
                                            }}
                                        />
                                    ))}
                                </Group>)
                            })
                        }
                    </BarGroup>
                    <AxisBottom
                        top={yDimensionMax + 10}
                        scale={X0Scale}
                        stroke={theme.info}
                        tickStroke={theme.info}
                        tickLabelProps={{
                            fill: theme.info,
                            fontSize: 4,
                            textAnchor: 'middle',
                        }}
                    />
                </Group>
            </svg >
            <div
                style={{
                    marginTop: -40,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: 'px',
                }}
            >
                <Legends colorScale={colorScale} />
            </div>
            {tooltipOpen && tooltipData && (
                <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
                    <ToolTip tooltipData={tooltipData} colorScale={colorScale} keys={keys_} />
                </TooltipInPortal>)}
        </div >

    );
}

export default function BarGroupChartResponsive({
    data,
    keys,
}: {
    data: any;
    keys: string[];
}) {

    return (
        <ParentSize className="flex graph-container" debounceTime={10} style={{ width: '100%', height: '50vh' }}>
            {({ width: visWidth, height: visHeight }) => {

                // TODO: inspect why visHeight is always 0
                if (visWidth < 10) return null;
                return (
                    <BarGroupChart width={visWidth} height={visHeight} data={data} keys={keys} />
                )
            }}
        </ParentSize>

    )
}