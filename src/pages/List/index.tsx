import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'
import * as C from './styles'

function List() {
  const months = [
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' }
  ]
  const years = [
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
    { value: 2025, label: 2025 }
  ]
  return (
    <C.Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <C.Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </C.Filters>

      <C.Content>
        <HistoryFinanceCard
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
