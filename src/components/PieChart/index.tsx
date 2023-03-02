import * as C from './styles'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

interface IPieChartProps {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

function PieChartBox({ data }: IPieChartProps) {
  return (
    <C.Container>
      <C.SideLeft>
        <h2>Relação</h2>
        <C.LegendContainer>
          {data.map(indicator => (
            <C.Legend key={indicator.name} color={indicator.color}>
              <div>{indicator.percent}</div>
              <span>{indicator.name}</span>
            </C.Legend>
          ))}
        </C.LegendContainer>
      </C.SideLeft>
      <C.SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="percent">
              {data.map(indicator => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </C.SideRight>
    </C.Container>
  )
}

export default PieChartBox
