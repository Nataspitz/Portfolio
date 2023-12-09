import { ThemeProvider } from 'styled-components'
// import { RouterMain } from './routes/RouterMain'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes'
import { Header } from './fragments/header/Header'
import { Home } from './pages/Home'


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
