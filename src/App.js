import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './commons/theme'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import Shelf from './pages/Shelf'
import GlobalStyle from './commons/global-styles'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/shelf' component={Shelf} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
