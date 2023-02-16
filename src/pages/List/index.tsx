import ContentHeader from '../../components/ContentHeader'
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
    </C.Container>
  )
}

export default List
