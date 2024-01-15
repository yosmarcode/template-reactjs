import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { Config } from './core/constant/config/Config'
import { ThemeProvider as ThemeProviderMui, createTheme } from '@mui/material'
import NavigationScroll from './core/helpers/NavigationScroll'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const theme = createTheme({
  palette: {
    primary: {
      main: Config.COLOR.COLOR_PRIMARY
    },
    secondary: {
      main: Config.COLOR.COLOR_SECONDARY
    },
    info: {
      main: Config.COLOR.COLOR_PRIMARY
    },
    error: {
      main: Config.COLOR.COLOR_ERROR
    }

  },
  typography: {
    fontSize: 15,
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')

  }
})
// basename={URL_API.BASE_NAME}
root.render(
  <React.StrictMode>
    <ThemeProviderMui theme={theme}>

      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint='xxs'
      >
        <BrowserRouter>
          <SnackbarProvider
            maxSnack={4}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <NavigationScroll>
              <App />
            </NavigationScroll>

          </SnackbarProvider>
        </BrowserRouter>

      </ThemeProvider>
    </ThemeProviderMui>

  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
