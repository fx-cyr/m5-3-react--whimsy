import React, {useContext} from "react";
import styled from "styled-components";
// import {avatar} from "../assets/carmen-sandiego.png";
import {TwitterProvider} from "./TwitterContext"
import Tweet from "./Tweet";
const App = () => {
  return (
<TwitterProvider>
    <Wrapper>
      <Tweet
        // tweetContents="Where in the world am I?"
        // displayName="Carmen Sandiego ✨"
        // username="carmen-sandiego"
        // avatarSrc={avatar}
        // isRetweetedByCurrentUser={false}
        // isLikedByCurrentUser={false}
      />
    </Wrapper>
    </TwitterProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
