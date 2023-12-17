import React, { useContext, useEffect, useState } from 'react'
import BarGroupChartResponsive from './BarGroupChart'
import BarGroupHorizontalChartResponsive from './BarGroupHorizontalChart'
import BarStackChartResponsive from './BarStackChart'
import BarStackHorizontalChartResponsive from './BarStackHorizontalChart'
import { ThemeContext } from './context/theme'
import PieChartResponsive from './PieChart'


interface Props {
    data: any;
    config: Config
}


export default function AbstractedChart({ data }: Props) {

    const config = {
        type: 'PIE',
        theme: 'light',
        visible_columns: ['col1', 'col2', 'col3']
    }
    return (
        <div className="w-full md:w-3/4 flex justify-between">
            {
                config.type === 'BARGROUP' && <BarGroupChartResponsive data={data} keys={config.visible_columns} />
            }
            {
                config.type === 'BARGROUP_HORIZONTAL' && <BarGroupHorizontalChartResponsive data={data} keys={config.visible_columns} />
            }
            {
                config.type === 'BARSTACK' && <BarStackChartResponsive data={data} keys={config.visible_columns} />
            }
            {
                config.type === 'BARSTACK_HORIZONTAL' && <BarStackHorizontalChartResponsive data={data} keys={config.visible_columns} />
            }
            {
                config.type === 'PIE' && <PieChartResponsive data={data} keys={config.visible_columns} />
            }
        </div>
    )
}
