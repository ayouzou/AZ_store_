
export default function ToolTip({ tooltipData, colorScale, keys }: {
    tooltipData: Record<string, any>
    colorScale: (x: string) => string
    keys: string[]

}) {
    return (
        <div className="w-full flex items-center rounded">
            <div className="w-full flex flex-col justify-between p-2 rounded gap-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-400" style={{ backgroundColor: colorScale(tooltipData.key) }}></div>
                        <strong>{tooltipData.key}</strong>
                    </div>
                    {(tooltipData.bar && tooltipData.bar.data) ?
                        <div className="font-bold text-lg" style={{ color: colorScale(tooltipData.key) }}>{tooltipData.bar.data[tooltipData.key]}</div>
                        : <div className="text-blue-500 font-bold text-lg" style={{ color: colorScale(tooltipData.key) }}>{tooltipData.value}</div>}
                </div>
                {tooltipData.bar && tooltipData.bar.data && Object.keys(tooltipData.bar.data).filter((key) => key !== tooltipData.key && typeof tooltipData.bar.data[key] === 'number' && keys.includes(key)).map((key) => {
                    return (
                        <div key={key} className="w-full flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4" style={{ backgroundColor: colorScale(key) }}></div>
                                <strong>{key}</strong>
                            </div>
                            <div className="font-bold text-lg" style={{ color: colorScale(key) }}>{tooltipData.bar.data[key]}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

