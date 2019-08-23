import React from 'react'
import FirebaseContext from '../../firebase/context'

function LinkList(props) {
  const { firebase } = React.useContext(FirebaseContext)

  const handleSnapshot = snapshot => {
    const links = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    console.log({ links })
  }
  const getLinks = () => {
    firebase.db.collection('links').onSnapshot(handleSnapshot)
  }

  React.useEffect(() => {
    getLinks()
  }, [])

  return <div>LinkList</div>
}

export default LinkList
