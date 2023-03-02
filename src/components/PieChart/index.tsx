import * as C from './styles'
// import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

function PieChart() {
  return (
    <C.Container>
      <C.SideLeft>
        <h2>Relação</h2>
        <C.LegendContainer>
          <C.Legend color="#f7931b">
            <div>5%</div>
            <span>Entradas</span>
          </C.Legend>
          <C.Legend color="#e44c4e">
            <div>95%</div>
            <span>Saídas</span>
          </C.Legend>
        </C.LegendContainer>
      </C.SideLeft>
      {/* <C.SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={[{ amount: 30, percent: 95 }]}
              labelLine={false}
              dataKey="percent"
            ></Pie>
          </PieChart>
        </ResponsiveContainer>
      </C.SideRight> */}
    </C.Container>
  )
}

export default PieChart
