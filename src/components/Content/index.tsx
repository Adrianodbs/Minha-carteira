import { Container } from './styles'

export interface ChildrenProps {
  children: React.ReactNode
}

function Content({ children }: ChildrenProps) {
  return <Container>{children}</Container>
}

export default Content
