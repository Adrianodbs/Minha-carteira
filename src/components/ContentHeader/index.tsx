import SelectInput from '../SelectInput'
import * as C from './styles'

interface iContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

function ContentHeader({ title, lineColor, children }: iContentHeaderProps) {
  return (
    <C.Container>
      <C.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </C.TitleContainer>
      <C.Controllers>{children}</C.Controllers>
    </C.Container>
  )
}

export default ContentHeader
