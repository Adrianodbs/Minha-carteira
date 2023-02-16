import * as C from './styles'

function ContentHeader() {
  return (
    <C.Container>
      <C.TitleContainer>
        <h1>Titulo</h1>
      </C.TitleContainer>
      <C.Controllers>
        <button>Botão a</button>
        <button>Botão b</button>
      </C.Controllers>
    </C.Container>
  )
}

export default ContentHeader
