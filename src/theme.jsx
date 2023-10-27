import {createGlobalStyle, ThemeProvider} from "styled-components";

const theme = {
    colors: {
        title: 'green',
        task: '#555'
    }
}

const GlobalStyle =  createGlobalStyle`
  body {
    background-color: #ff0064;
  }
  * {
    padding: 0;
  }
`

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}
