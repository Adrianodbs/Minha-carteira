import * as C from './styles'

interface IMessageBoxProp {
  title: string
  description: string
  footerText: string
  icon: string
}

function MessageBox({ description, footerText, icon, title }: IMessageBoxProp) {
  return (
    <C.Container>
      <header>
        <h1>
          {title} <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </C.Container>
  )
}

export default MessageBox
