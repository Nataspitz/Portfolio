import { ThemeProvider } from 'styled-components'
import { RouterMain } from './routes/RouterMain'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes'


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterMain />
    </ThemeProvider>
  )
}

export default App
