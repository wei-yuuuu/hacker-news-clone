import React from 'react'

import LinkItem from '../Link/LinkItem'
import FirebaseContext from '../../firebase/context'

function SearchLinks() {
  const [filter, setFilter] = React.useState('')
  const [links, setLinks] = React.useState([])
  const [filteredLinks, setFilterLinks] = React.useState([])
  const { firebase } = React.useContext(FirebaseContext)

  React.useEffect(() => {
    getInitialLinks()
  }, [])

  const handleSearch = e => {
    e.preventDefault()

    const query = filter.toLowerCase()
    const matchedLinks = links.filter(
      link =>
        link.description.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query) ||
        link.postedBy.name.toLowerCase().includes(query)
    )
    setFilterLinks(matchedLinks)
  }
  async function getInitialLinks() {
    const snapshot = await firebase.db.collection('links').get()
    const links = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })
    setLinks(links)
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <>
          Search <input onChange={e => setFilter(e.target.value)} />
          <button>OK</button>
        </>
      </form>
      {filteredLinks.map((filteredLink, index) => (
        <LinkItem
          key={filteredLink.id}
          showCount={false}
          link={filteredLink}
          index={index}
        />
      ))}
    </>
  )
}

export default SearchLinks
