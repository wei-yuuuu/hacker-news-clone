import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

import { getDomain } from '../../utils'
import FirebaseContext from '../../firebase/context'

function LinkItem({ link, index, showCount, history }) {
  const { firebase, user } = React.useContext(FirebaseContext)

  async function handleVote() {
    if (!user) {
      history.push('/login')
    } else {
      const voteRef = firebase.db.collection('links').doc(link.id)
      const doc = await voteRef.get()

      if (doc.exists) {
        const previousVotes = doc.data().votes
        const vote = { votedBy: { id: user.uid, name: user.displayName } }
        const updatedVotes = [...previousVotes, vote]
        voteRef.update({ votes: updatedVotes })
      }
    }
  }

  return (
    <LinkItemContainer>
      <LeftContainer>
        {showCount && <LinkItemIndex>{index}.</LinkItemIndex>}
        <VoteButton onClick={handleVote}>▲</VoteButton>
      </LeftContainer>
      <RightContainer>
        {link.description} <LinkURL>({getDomain(link.url)})</LinkURL>
        <VoteInfo>
          {link.votes.length} votes by {link.postedBy.name}{' '}
          {distanceInWordsToNow(link.created)}
          {' | '}
          <Link to={`/link/${link.id}`}>
            {link.comments.length > 0 ? `${link.comments.length}` : 'discuss'}
          </Link>
        </VoteInfo>
      </RightContainer>
    </LinkItemContainer>
  )
}

const LinkItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`

const RightContainer = styled.div`
  margin-left: 1rem;
`

const LinkItemIndex = styled.span`
  color: #828282;
`

const VoteButton = styled.div`
  font-size: 11px;
  color: #828282;
  margin-left: 0.25rem;
  cursor: pointer;
`

const LinkURL = styled.span`
  color: #828282;
`

const VoteInfo = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #828282;
`

export default withRouter(LinkItem)
