import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

    <h1 >hello</h1>
    </ThemeProvider>
  )
  
}

