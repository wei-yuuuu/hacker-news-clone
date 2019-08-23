import React from 'react'
import FirebaseContext from '../../firebase/context'

import LinkItem from './LinkItem'

function LinkList(props) {
  const { firebase } = React.useContext(FirebaseContext)
  const [links, setLinks] = React.useState([])

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
    firebase.db.collection('links').onSnapshot(handleSnapshot)
  }

  React.useEffect(() => {
    getLinks()
  }, [])

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
