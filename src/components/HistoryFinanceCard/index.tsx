import * as C from './styles'

interface iHistoryFinanceCardProps {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

function HistoryFinanceCard({
  tagColor,
  title,
  subtitle,
  amount
}: iHistoryFinanceCardProps) {
  return (
    <C.Container>
      <C.Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </C.Container>
  )
}

export default HistoryFinanceCard
