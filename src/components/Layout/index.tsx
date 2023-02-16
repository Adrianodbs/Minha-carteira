import { Grid } from './styles'

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content, { ChildrenProps } from '../Content'

function Layout({ children }: ChildrenProps) {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  )
}

export default Layout
