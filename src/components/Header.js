import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { FirebaseContext } from '../firebase'

function Header() {
  const { user, firebase } = React.useContext(FirebaseContext)

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Img src="/logo.png" alt="Hacker News Logo" />
        <NavTitle to="/">Hacker News</NavTitle>
        <LinkContainer>
          <LinkHeader to="/">new</LinkHeader>
          <Divider>|</Divider>
          <LinkHeader to="/top">top</LinkHeader>
          <Divider>|</Divider>
          <LinkHeader to="/search">search</LinkHeader>
          <Divider>|</Divider>
          <LinkHeader to="/create">submit</LinkHeader>
        </LinkContainer>
      </HeaderLeft>
      <HeaderRight>
        {user ? (
          <>
            <UserName>{user.displayName}</UserName>
            <Divider>|</Divider>
            <LogoutButton>logout</LogoutButton>
          </>
        ) : (
          <LinkHeader to="/login">login</LinkHeader>
        )}
      </HeaderRight>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: #ff6600;
  white-space: nowrap;
  padding: 0.25rem;
  color: black;
  justify-content: space-between;
  display: flex;
`

const HeaderLeft = styled.div`
  display: flex;
`

const Img = styled.img`
  width: 20px;
  height: 18px;
  border: 1px solid white;
  margin: 0;
  @media (max-width: 500px) {
    margin-top: 7px;
  }
`

const NavTitle = styled(NavLink)`
  font-weight: 700;
  margin-left: 0.25rem;
  margin-right: 5px;
  color: black;
  text-decoration: none;
  @media (max-width: 500px) {
    position: absolute;
    margin-left: 1.62rem;
  }
`

const LinkContainer = styled.div`
  display: flex;
  @media (max-width: 500px) {
    position: relative;
    margin-left: 0.1rem;
    margin-top: 1rem;
  }
`

const LinkHeader = styled(NavLink)`
  margin-left: 0.2rem;
  color: black;
  text-decoration: none;
`

const HeaderRight = styled.div`
  display: flex;
  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`

const Divider = styled.div`
  margin-left: 0.25rem;
  color: black;
  @media (max-width: 350px) {
    display: none;
  }
`

const UserName = styled.div`
  color: black;
  text-decoration: none;
  @media (max-width: 500px) {
    position: absolute;
    margin-top: -1rem;
    margin-left: 1rem;
  }
`

const LogoutButton = styled.div`
  margin-left: 0.25rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`

export default Header
