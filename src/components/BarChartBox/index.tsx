import * as C from './styles'
import formatCurrency from '../../utils/formatCurrency'

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'

interface IBarChartProps {
  title: string
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

function BarChartBox({ data, title }: IBarChartProps) {
  return (
    <C.Container>
      <C.SideLeft>
        <h2>{title}</h2>
        <C.LegendContainer>
          {data.map(indicator => (
            <C.Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </C.Legend>
          ))}
        </C.LegendContainer>
      </C.SideLeft>
      <C.SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount">
              {data.map(indicator => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </C.SideRight>
    </C.Container>
  )
}

export default BarChartBox
