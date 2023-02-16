import * as C from './styles'

interface iSelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
}

function SelectInput({ options }: iSelectInputProps) {
  return (
    <C.Container>
      <select>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </C.Container>
  )
}

export default SelectInput
