import { createContext, useState } from 'react'

interface IAuthContext {
  logged: boolean
  signIn(email: string, password: string): void
  signOut(): void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: any) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@minha-carteira:logged')

    return !!isLogged
  })

  const signIn = (email: string, password: string) => {
    if (email === 'adrianoalves019@gmail.com' && password === '123456') {
      localStorage.setItem('@minha-carteira:logged', 'true')
      setLogged(true)
    } else {
      alert('Senha ou usuário inválidos')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@minha-carteira:logged')
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
