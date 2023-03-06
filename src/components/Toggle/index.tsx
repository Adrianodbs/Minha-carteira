import { useState } from 'react'
import { Container, ToggleLabel, ToggleSelector } from './styles'

interface IToggleProps {
  labelLeft: string
  labelRight: string
  checked: boolean
  onChange(): void
}

function Toggle({ checked, labelLeft, labelRight, onChange }: IToggleProps) {
  const [online, setOnline] = useState(false)
  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <ToggleSelector
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  )
}

export default Toggle
