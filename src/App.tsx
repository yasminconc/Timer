
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Router from './router/Router'


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App