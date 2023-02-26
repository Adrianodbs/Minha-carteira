import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import * as C from './styles'

function Dashboard() {
  const options = [
    { value: 'Adriano', label: 'Adriano' },
    { value: 'Ana', label: 'Ana' },
    { value: 'Maria', label: 'Maria' }
  ]
  return (
    <C.Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </C.Container>
  )
}

export default Dashboard
