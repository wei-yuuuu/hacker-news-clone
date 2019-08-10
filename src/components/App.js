import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'

import CreateLink from './Link/CreateLink'
import Login from './Auth/Login'
import ForgotPassword from './Auth/ForgotPassword'
import SearchLink from './Link/SearchLinks'
import LinkList from './Link/LinkList'
import LinkDetail from './Link/LinkDetail'
import Header from './Header'

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <RouteContainer>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route path="/create" component={CreateLink} />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/search" component={SearchLink} />
            <Route path="/top" component={LinkList} />
            <Route path="/new/:page" component={LinkList} />
            <Route path="/link/:linkId" component={LinkDetail} />
          </Switch>
        </RouteContainer>
      </AppContainer>
    </Router>
  )
}

const AppContainer = styled.div`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
`

const RouteContainer = styled.div`
  background-color: rgb(246, 246, 239);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`

export default App
