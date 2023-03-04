import * as C from './styles'

import formatCurrency from '../../utils/formatCurrency'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

interface IHistoryBoxProp {
  data: {
    month: string
    amountEntry: number
    amountOutput: number
  }[]
  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

function HistoryBox({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput
}: IHistoryBoxProp) {
  return (
    <C.Container>
      <C.Header>
        <h2>Histórico de saldo</h2>
        <C.LegendContainer>
          <C.Legend color={lineColorAmountOutput}>
            <div></div>
            <span>Saídas</span>
          </C.Legend>
          <C.Legend color={lineColorAmountEntry}>
            <div></div>
            <span>Entradas</span>
          </C.Legend>
        </C.LegendContainer>
      </C.Header>

      <C.ChartContainer>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
            <XAxis dataKey="month" stroke="#cecece" />
            <Tooltip formatter={value => formatCurrency(Number(value))} />
            <Line
              type="monotone"
              dataKey="amountEntry"
              name="Entradas"
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountOutput"
              name="Saídas"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </C.ChartContainer>
    </C.Container>
  )
}

export default HistoryBox
