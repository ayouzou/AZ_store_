import React from 'react'
import {
    LegendOrdinal,
    LegendItem,
    LegendLabel,
} from '@visx/legend';

interface Props {
    colorScale: any
}

export default function Legends({ colorScale }: Props) {
    return (
        <LegendOrdinal scale={colorScale} labelFormat={(label: unknown) => `${(label as string).toUpperCase()}`}>
            {(labels) => (
                <div className='flex gap-4'>
                    {labels.map((label, i) => (
                        <LegendItem
                            key={`legend-quantile-${i}`}
                            className='mx-2 grow'

                        >
                            <svg width={14} height={14}>
                                <rect fill={label.value} width={14} height={14} />
                            </svg>
                            <div className="flex items-center gap-10">
                                <LegendLabel className='text-[12px]' align="left" margin="0 0 0 4px">
                                    {label.text}
                                </LegendLabel>
                            </div>
                        </LegendItem>
                    ))}
                </div>
            )}
        </LegendOrdinal>
    )
}
