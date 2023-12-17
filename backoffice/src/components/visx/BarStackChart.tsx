import React, { useContext } from 'react';
import { BarStack } from '@visx/shape';
import { SeriesPoint } from '@visx/shape/lib/types';
import { Group } from '@visx/group';
import { Grid } from '@visx/grid';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { getKeys } from './utils/shared/getKeys';
import { formatData } from './utils/shared/formatData';
import { getMinAndMax } from './utils/shared/getMinAndMax';
import { ThemeContext } from './context/theme';
import ToolTip from './shared/ToolTip'
import Legends from './shared/Legends';
import { getTotalMax } from './utils/shared/getTotalMax';


type TooltipData = {
    bar: SeriesPoint<number>;
    key: string;
    index: number;
    height: number;
    width: number;
    x: number;
    y: number;
    color: string;
};

export type BarStackProps = {
    width?: number;
    height?: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    events?: boolean;
    data: any;
    keys?: string[];
    theme?: Record<string, string>

};

const purple1 = '#6c5efb';
const purple2 = '#c998ff';
export const purple3 = '#a44afe';
const blue = '#aeeef8';
const coolPink = '#f6e'
const green = '#e5fd3d';
const purple = '#9caff6';
export const background = '#eaedff';

const defaultMargin = { top: 40, right: 0, bottom: 0, left: 0 };
const tooltipStyles = {
    ...defaultStyles,
    minWidth: 60,
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'white',
};


let tooltipTimeout: number;

function BarStackChart({
    width,
    height,
    events = false,
    margin = defaultMargin,
    data,
    keys,
}: BarStackProps) {
    const { theme } = useContext(ThemeContext)
    const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } =
        useTooltip<TooltipData>();

    const { containerRef, TooltipInPortal } = useTooltipInPortal({
        // TooltipInPortal is rendered in a separate child of <body /> and positioned
        // with page coordinates which should be updated on scroll. consider using
        // Tooltip or TooltipWithBounds if you don't need to render inside a Portal
        scroll: true,
    });

    if (width < 10) return null;
    const keys_ = getKeys(data, keys)

    const formatedData = formatData(data)
    const magicParam = Object.keys(formatedData[0])[0]
    const getXParam = (d: any) => d[magicParam]
    const [yMin, yMax] = getMinAndMax(formatedData)
    const X0Scale = scaleBand<string>({
        domain: formatedData.map(getXParam),
        padding: 0.2,
    });
    const X1Scale = scaleBand<string>({
        domain: keys_,
        padding: 0.1,
    });
    const YScale = scaleLinear<number>({

        domain: [0, getTotalMax(formatedData)],
        range: [getTotalMax(formatedData), 0],
        nice: true,
    });
    const colorScale = scaleOrdinal<string, string>({
        domain: keys_,
        range: Object.values(theme).slice(1),
    });


    // bounds
    const xDimensionMax = width;
    const yDimensionMax = height - margin.top - 100;

    X0Scale.rangeRound([0, xDimensionMax]);
    YScale.range([yDimensionMax, 0]);

    return width < 10 ? null : (
        <div className='relative'>
            <div className="absolute top-3 w-full flex justify-center"><h1 className="text-md font-extrabold leading-none tracking-tight  md:text-xl  lg:text-2xl">Crimes Analytics in West Coast</h1>
            </div>
            <svg ref={containerRef} width={width} height={height}>
                <rect x={0} y={0} width={width + 1000} height={height} fill={theme.background} rx={14} />
                <Grid
                    top={margin.top}
                    left={margin.left}
                    xScale={X0Scale}
                    yScale={YScale}
                    width={xDimensionMax + 10000}
                    height={yDimensionMax}
                    stroke="black"
                    strokeOpacity={0.1}
                // xOffset={X0Scale.bandwidth() / 2}
                />
                <Group top={margin.top}>
                    <BarStack<number, string>
                        data={formatedData}
                        keys={keys_}
                        x={getXParam}
                        xScale={X0Scale}
                        yScale={YScale}
                        color={colorScale}
                    >
                        {(barStacks) =>
                            barStacks.map((barStack) =>
                                barStack.bars.map((bar) => (
                                    <rect
                                        key={`bar-stack-${barStack.index}-${bar.index}`}
                                        x={bar.x}
                                        y={bar.y}
                                        height={bar.height}
                                        width={bar.width}
                                        fill={bar.color}
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
                                            const left = bar.x + bar.width / 2;
                                            showTooltip({
                                                tooltipData: bar,
                                                tooltipTop: eventSvgCoords?.y,
                                                tooltipLeft: left,
                                            });
                                        }}
                                    />
                                )),
                            )
                        }
                    </BarStack>

                    <AxisLeft
                        left={width - xDimensionMax + 35}
                        // top={-10}
                        scale={YScale}
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
                        top={yDimensionMax + 10}
                        scale={X0Scale}
                        stroke={theme.info}
                        tickStroke={theme.info}
                        tickLabelProps={{
                            fill: theme.info,
                            fontSize: 11,
                            textAnchor: 'middle',
                        }}
                    />
                </Group>
            </svg>
            <div
                style={{
                    position: 'absolute',
                    bottom: margin.bottom + 30,
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
                </TooltipInPortal>
            )}
        </div>
    );
}



export default function BarStackChartResponsive({
    data,
    keys,
}: BarStackProps) {
    return (
        <ParentSize className="flex graph-container" debounceTime={10} style={{ width: '100%', height: '90vh' }}>
            {({ width: visWidth, height: visHeight }) => {
                // TODO: inspect why visHeight is always 0
                // if (visWidth < 10 || visHeight < 10) return null;
                return (
                    <BarStackChart width={visWidth} height={visHeight} data={data} keys={keys} />
                )
            }}
        </ParentSize>

    )
}