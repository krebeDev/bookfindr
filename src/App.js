import React from 'react'
import { ThemeProvider } from 'styled-components'
import BooksContextProvider from './contexts/BooksContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import theme from './commons/theme'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import BookDetails from './pages/BookDetails'
import Bookshelf from './pages/Bookshelf'
import SearchResult from './pages/SearchResult'
import NotFound from './pages/NotFound'
import GlobalStyle from './commons/global-styles'

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
              <Route path='/shelf/:bookId' component={BookDetails} />
              <Route path='/shelf' component={Bookshelf} />
              <Route path='/search*' component={SearchResult} />
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
