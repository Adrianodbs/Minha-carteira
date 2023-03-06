import * as C from './styles'
import { InputHTMLAttributes } from 'react'

type IInputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ ...rest }: IInputProps) {
  return <C.Container {...rest} />
}

export default Input
