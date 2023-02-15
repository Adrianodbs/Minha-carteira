import { Grid } from './styles'

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

function Layout() {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content />
    </Grid>
  )
}

export default Layout
