import * as C from './styles'

interface iSelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined
  defaltValue?: string | number
}

function SelectInput({ options, onChange, defaltValue }: iSelectInputProps) {
  return (
    <C.Container>
      <select onChange={onChange} defaultValue={defaltValue}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </C.Container>
  )
}

export default SelectInput
