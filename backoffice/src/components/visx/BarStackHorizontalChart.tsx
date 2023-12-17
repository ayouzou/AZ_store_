import React, { useContext } from 'react';
import { BarStackHorizontal } from '@visx/shape';
import { SeriesPoint } from '@visx/shape/lib/types';
import { Group } from '@visx/group';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { withTooltip, Tooltip, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { LegendOrdinal, LegendLabel, LegendItem } from '@visx/legend';
import { getKeys } from './utils/shared/getKeys';
import { formatData } from './utils/shared/formatData';
import { getMinAndMax } from './utils/shared/getMinAndMax';
import { ThemeContext } from './context/theme';
import ToolTip from './shared/ToolTip';
import Legends from './shared/Legends';
import { getTotalMax } from './utils/shared/getTotalMax';


type TooltipData = {
    bar: SeriesPoint<number>;
    key: string;
    index: number;
    height?: number;
    width?: number;
    x: number;
    y: number;
    color: string;
};

export type BarStackHorizontalProps = {
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
export const background = '#eaedff';
const defaultMargin = { top: 40, left: 50, right: 40, bottom: 100 };
const tooltipStyles = {
    ...defaultStyles,
    minWidth: 60,
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'white',
};


let tooltipTimeout: number;

const BarStackHorizontalChart = withTooltip<BarStackHorizontalProps, TooltipData>(
    ({
        width,
        height,
        events = false,
        margin = defaultMargin,
        tooltipOpen,
        tooltipLeft,
        tooltipTop,
        tooltipData,
        hideTooltip,
        showTooltip,
        data,
        keys,

    }: BarStackHorizontalProps & WithTooltipProvidedProps<TooltipData>) => {
        const { theme } = useContext(ThemeContext)

        const keys_ = getKeys(data, keys)

        const formatedData = formatData(data)
        const magicParam = Object.keys(formatedData[0])[0]
        const getXParam = (d: any) => d[magicParam]
        const [yMin, yMax] = getMinAndMax(formatedData)

        const yScale = scaleBand<string>({
            domain: formatedData.map(getXParam),
            padding: 0.2,
        });

        const xScale = scaleLinear<number>({
            range: [getTotalMax(formatedData), 0], // svg x-coordinates, svg x-coordinates increase left to right
            domain: [0, getTotalMax(formatedData)],
            nice: true,
        });
        const colorScale = scaleOrdinal<string, string>({
            domain: keys_,
            range: Object.values(theme).slice(1),
        });
        // bounds
        const xDimensionMax = width - margin.left - margin.right;
        const yDimensionMax = height - margin.top - margin.bottom;

        xScale.rangeRound([0, xDimensionMax]);
        yScale.rangeRound([0, yDimensionMax]);

        return width < 10 ? null : (
            <div>
                <div className="absolute top-3 w-full flex justify-center"><h1 className="text-md font-extrabold leading-none tracking-tight  md:text-xl  lg:text-2xl">Crimes Analytics in West Coast</h1>
                </div>
                <svg width={width} height={height}>
                    <rect width={width} height={height} fill={theme.background} rx={14} />
                    <Group top={margin.top} left={margin.left}>
                        <BarStackHorizontal<number, string>
                            data={formatedData}
                            keys={keys_}
                            height={yDimensionMax}
                            y={getXParam}
                            xScale={xScale}
                            yScale={yScale}
                            color={colorScale}
                        >
                            {(barStacks) =>
                                barStacks.map((barStack) =>
                                    barStack.bars.map((bar) => {
                                        return (<rect
                                            key={`barstack-horizontal-${barStack.index}-${bar.index}`}
                                            x={bar.x}
                                            y={bar.y}
                                            width={bar.width}
                                            height={bar.height}
                                            fill={bar.color}
                                            onClick={() => {
                                                if (events) alert(`clicked: ${JSON.stringify(bar)}`);
                                            }}
                                            onMouseLeave={() => {
                                                tooltipTimeout = window.setTimeout(() => {
                                                    hideTooltip();
                                                }, 300);
                                            }}
                                            onMouseMove={() => {
                                                if (tooltipTimeout) clearTimeout(tooltipTimeout);
                                                const top = bar.y + margin.top;
                                                const left = bar.x + bar.width + margin.left;
                                                showTooltip({
                                                    tooltipData: bar,
                                                    tooltipTop: top,
                                                    tooltipLeft: left,
                                                });
                                            }}
                                        />)
                                    }),
                                )
                            }
                        </BarStackHorizontal>
                        <AxisLeft
                            scale={yScale}
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
                            scale={xScale}
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
                        position: 'absolute',
                        bottom: margin.bottom / 2 - 10,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '14px',
                    }}
                >
                    <Legends colorScale={colorScale} />
                </div>
                {tooltipOpen && tooltipData && (
                    <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
                        <ToolTip tooltipData={tooltipData} colorScale={colorScale} keys={keys_} />
                    </Tooltip>
                )}
            </div>
        );
    },
);

export default function BarStackHorizontalChartResponsive({
    data,
    keys,
}: BarStackHorizontalProps) {
    return (
        <ParentSize className="flex" debounceTime={10} style={{ width: '100%', height: '90vh' }}>
            {({ width: visWidth, height: visHeight }) => {
                return (
                    <BarStackHorizontalChart width={visWidth} height={visHeight} data={data} keys={keys} />
                )
            }}
        </ParentSize>

    )
}