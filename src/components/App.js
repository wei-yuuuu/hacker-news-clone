import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'

import Login from './Auth/Login'
import ForgotPassword from './Auth/ForgotPassword'
import CreateLink from './Link/CreateLink'
import SearchLink from './Link/SearchLinks'
import LinkList from './Link/LinkList'
import LinkDetail from './Link/LinkDetail'
import Header from './Header'

import useAuth from '../hooks/useAuth'
import firebase, { FirebaseContext } from '../firebase'

function App() {
  const user = useAuth()

  return (
    <Router>
      <FirebaseContext.Provider value={{ user, firebase }}>
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
      </FirebaseContext.Provider>
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
