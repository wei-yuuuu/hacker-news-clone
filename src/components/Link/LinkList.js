import React from 'react'
import FirebaseContext from '../../firebase/context'

import LinkItem from './LinkItem'

function LinkList(props) {
  const { firebase } = React.useContext(FirebaseContext)
  const [links, setLinks] = React.useState([])
  const isTopPage = props.location.pathname.includes('top')
  // const isNewPage = props.location.pathname.includes('new')

  const handleSnapshot = snapshot => {
    const links = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    setLinks(links)
  }
  const getLinks = () => {
    if (isTopPage) {
      return firebase.db
        .collection('links')
        .orderBy('voteCount', 'desc')
        .onSnapshot(handleSnapshot)
    }
    return firebase.db
      .collection('links')
      .orderBy('created', 'desc')
      .onSnapshot(handleSnapshot)
  }
  // const renderLinks = () => {
  //   if (isNewPage) {
  //     return links
  //   }
  //   const topLinks = [...links].sort((a, b) => b.votes.length - a.votes.length)
  //   return topLinks
  // }
  React.useEffect(() => {
    const unsubscribe = getLinks()
    return () => unsubscribe()
  }, [isTopPage])

  return (
    <>
      {links.map((link, index) => (
        <LinkItem
          key={link.id}
          showCount={true}
          link={link}
          index={index + 1}
        />
      ))}
    </>
  )
}

export default LinkList
