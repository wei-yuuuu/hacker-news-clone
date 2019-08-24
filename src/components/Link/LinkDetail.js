import React from 'react'
import styled from 'styled-components'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

import FirebaseContext from '../../firebase/context'
import LinkItem from '../Link/LinkItem'

function LinkDetail(props) {
  const linkId = props.match.params.linkId

  const [link, setLink] = React.useState(null)
  const [commentText, setCommentText] = React.useState('')
  const { firebase, user } = React.useContext(FirebaseContext)

  const linkRef = firebase.db.collection('links').doc(linkId)

  async function handleAddComment() {
    if (!user) {
      props.history.push('/login')
    }
    if (!commentText) return

    const doc = await linkRef.get()

    if (doc.exists) {
      const previousComments = doc.data().comments
      const comment = {
        postedBy: { id: user.uid, name: user.displayName },
        created: Date.now(),
        text: commentText
      }
      const updatedComments = [...previousComments, comment]
      linkRef.update({ comments: updatedComments })
      setLink(prevState => ({
        ...prevState,
        comments: updatedComments
      }))
      setCommentText('')
    }
  }

  async function getLink() {
    const doc = await linkRef.get()
    setLink({ ...doc.data(), id: doc.id })
  }

  React.useEffect(() => {
    getLink()
  }, [])

  return !link ? (
    <div>Loading...</div>
  ) : (
    <>
      <LinkItem showCount={false} link={link} />
      <textarea
        onChange={event => setCommentText(event.target.value)}
        value={commentText}
        rows="10"
        cols="60"
      />
      <AddCommentButton onClick={handleAddComment}>
        Add Comment
      </AddCommentButton>
      {link.comments.map((comment, index) => (
        <div key={index}>
          <CommentAuthor>
            {comment.postedBy.name} | {distanceInWordsToNow(comment.created)}
          </CommentAuthor>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  )
}

const AddCommentButton = styled.button`
  font-family: monospace;
  font-size: 10pt;
  color: black;
  background-color: buttonface;
  text-align: center;
  padding: 2px 6px 3px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
  cursor: pointer;
  max-width: 250px;
  display: block;
  margin-top: 0.5rem;
`

const CommentAuthor = styled.p`
  color: #828282;
`

const Container = styled(LinkItem)`
  display: block;
`

export default LinkDetail
