import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import BooksContextProvider from './contexts/BooksContext'
import theme from './commons/theme'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import Shelf from './pages/Shelf'
import GlobalStyle from './commons/global-styles'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

const App = () => {
  return (
    <BooksContextProvider>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <Router>
          <Header />
          <main>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/shelf' component={Shelf} />
              <Route path='/search' component={Search} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </BooksContextProvider>
  )
}

export default App
