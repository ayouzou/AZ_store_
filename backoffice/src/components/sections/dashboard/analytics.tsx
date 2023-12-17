import BarGroupChartResponsive from '@/components/visx/BarGroupChart'
import PieChartResponsive from '@/components/visx/PieChart'
import React from 'react'

const data = {

    "columns": [
        "location",
        "total_sales",
        "friday_sales",
        "saturday_sales",
        "sunday_sales"
    ],
    "rows": [
        [
            "800 N ALAMEDA ST",
            200,
            137,
            130,
            127
        ],
        [
            "7TH",
            203,
            143,
            138,
            128
        ],
        [
            "6TH ST",
            200,
            150,
            153,
            214
        ],
        [
            "7TH ST",
            272,
            147,
            130,
            211
        ],
        [
            "6TH",
            222,
            208,
            224,
            144
        ]
    ]
}
export default function Analytics() {
    return (
        <div className='flex'>
            <div className="w-1/2">
                <PieChartResponsive />
            </div>
            <div className="w-1/2">
                <BarGroupChartResponsive data={data} keys={['total_sales', 'friday_sales', 'saturday_sales', 'sunday_sales']} />
            </div>
        </ div>
    )
}
