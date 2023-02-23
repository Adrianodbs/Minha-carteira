import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'
import * as C from './styles'

function List() {
  const options = [
    { value: 'Adriano', label: 'Adriano' },
    { value: 'Ana', label: 'Ana' },
    { value: 'Maria', label: 'Maria' }
  ]
  return (
    <C.Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>

      <C.Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="22/02/2023"
          amount="R$ 130"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="22/02/2023"
          amount="R$ 130"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="22/02/2023"
          amount="R$ 130"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="22/02/2023"
          amount="R$ 130"
        />
      </C.Content>
    </C.Container>
  )
}

export default List
