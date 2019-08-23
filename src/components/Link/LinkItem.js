import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

import { getDomain } from '../../utils'

function LinkItem({ link, index, showCount }) {
  return (
    <LinkItemContainer>
      <LeftContainer>
        {showCount && <LinkItemIndex>{index}.</LinkItemIndex>}
        <VoteButton>▲</VoteButton>
      </LeftContainer>
      <RightContainer>
        {link.description} <LinkURL>({getDomain(link.url)})</LinkURL>
        <VoteInfo>
          {link.votes.lenght} votes by {link.postedBy.name}{' '}
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
`

const LinkURL = styled.span`
  color: #828282;
`

const VoteInfo = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #828282;
`

export default LinkItem
