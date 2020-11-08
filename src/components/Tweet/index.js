import React, { useContext } from "react";
import styled from "styled-components";
import {useTwitter} from "../TwitterContext"
import Header from "./Header";
import ActionBar from "./ActionBar";

const Tweet = () => {
  const {displayName,
  username,
  avatarSrc,
  tweetContents,
  isRetweetedByCurrentUser,
  isLikedByCurrentUser,
  date,
  numOfLikes, setNumOfLikes,
  numOfRetweets, setNumOfRetweets} = useTwitter()

  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <StatsWrapper>
      <Stats><Bold>{numOfRetweets} </Bold>Retweets</Stats> 
      <Stats><Bold>{numOfLikes}</Bold> Likes</Stats>
      </StatsWrapper>
      
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const StatsWrapper = styled.div`
color: rgb(101, 119, 134);
display:flex;
align-items:center;
justify-content: left;
height:48px;
`

const Stats = styled.div`
  align-items: center;
  margin-right:12px;
`;

const Bold = styled.span`
color:black;
font-weight: bold;
`

export default Tweet;
