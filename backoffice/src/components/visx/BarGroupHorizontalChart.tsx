import React, { useContext } from 'react';
import { BarGroupHorizontal, Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { getKeys } from './utils/shared/getKeys';
import { formatData } from './utils/shared/formatData';
import { getMinAndMax } from './utils/shared/getMinAndMax';
import { ThemeContext } from './context/theme';
import ToolTip from './shared/ToolTip';
import Legends from './shared/Legends';

export type BarGroupHorizontalProps = {
    width?: number;
    height?: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    events?: boolean;
    data?: any;
    keys?: string[];
    theme?: Record<string, string>

};

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

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 50 };
const tooltipStyles = {
    ...defaultStyles,
    minWidth: 60,
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'white',
};

let tooltipTimeout: number;
function BarGroupHorizontalChart({
    width,
    height,
    margin = defaultMargin,
    events = false,
    data,
    keys,

}: BarGroupHorizontalProps) {
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
    const [yMin, yMax] = getMinAndMax(formatedData)

    // scales
    const colorScale = scaleOrdinal<string, string>({
        domain: keys_,
        range: Object.values(theme).slice(1),
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
    const legendsHeight = 100;

    // update scale output dimensions
    X0Scale.rangeRound([0, yDimensionMax]);
    X1Scale.rangeRound([0, X0Scale.bandwidth()]);
    YScale.rangeRound([0, xDimensionMax]);

    return (
        <div ref={containerRef} className='h-screen relative flex flex-col'>
            <div className="absolute top-3 w-full flex justify-center"><h1 className="text-md font-extrabold leading-none tracking-tight  md:text-xl  lg:text-2xl">Crimes Analytics in West Coast</h1>
            </div>
            <svg width={width} height={height + legendsHeight}>
                <rect x={0} y={0} width={width} height={height + legendsHeight} fill={theme.background} rx={14} />
                <Group top={margin.top} left={margin.left}>
                    <BarGroupHorizontal
                        data={formatedData}
                        keys={keys_}
                        width={xDimensionMax}
                        y0={getXParam}
                        y0Scale={X0Scale}
                        y1Scale={X1Scale}
                        xScale={YScale}
                        color={colorScale}
                    >
                        {(barGroups) =>
                            barGroups.map((barGroup) => (
                                <Group
                                    key={`bar-group-horizontal-${barGroup.index}-${barGroup.y0}`}
                                    top={barGroup.y0}
                                >
                                    {barGroup.bars.map((bar) => (
                                        <Bar
                                            className='cursor-pointer'
                                            key={`${barGroup.index}-${bar.index}-${bar.key}`}
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
                                </Group>
                            ))
                        }
                    </BarGroupHorizontal>
                    <AxisLeft
                        scale={X0Scale}
                        stroke={theme.info}
                        tickStroke={theme.info}
                        tickLabelProps={{
                            fill: theme.info,
                            fontSize: 11,
                            textAnchor: 'end',
                            dy: '0.33em',
                        }}
                    />
                    <AxisBottom
                        top={yDimensionMax}
                        scale={YScale}
                        stroke={theme.info}
                        tickStroke={theme.info}
                        tickLabelProps={{
                            fill: theme.info,
                            fontSize: 11,
                            textAnchor: 'middle',
                            spacing: 1000,
                        }}
                    />
                </Group>
            </svg>
            <div
                style={{
                    marginTop: -60,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '14px',
                }}
            >
                <Legends colorScale={colorScale} />
            </div>
            {tooltipOpen && tooltipData && (
                <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
                    <ToolTip tooltipData={tooltipData} colorScale={colorScale} keys={keys_} />
                </TooltipInPortal>)}
        </div>
    );
}

export default function BarGroupHorizontalChartResponsive({
    data,
    keys,
}: BarGroupHorizontalProps) {
    return (
        <ParentSize className="flex graph-container" debounceTime={10} style={{ width: '100%', height: '80vh' }}>
            {({ width: visWidth, height: visHeight }) => {
                if (visWidth < 10 || visHeight < 10) return null;
                return (
                    <BarGroupHorizontalChart width={visWidth} height={visHeight} data={data} keys={keys} />
                )
            }}
        </ParentSize>
    )
} 