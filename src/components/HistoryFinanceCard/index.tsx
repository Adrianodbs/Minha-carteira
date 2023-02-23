import * as C from './styles'

interface iHistoryFinanceCardProps {
  cardColor: string
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

function HistoryFinanceCard({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount
}: iHistoryFinanceCardProps) {
  return (
    <C.Container color={cardColor}>
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
