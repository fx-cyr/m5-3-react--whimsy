import React from "react";
import styled from "styled-components";
import {useTwitter} from "../TwitterContext"
import RetweetIcon from "./RetweetIcon";
import PoppingCircleRetweet from "./PoppingCircleRetweet"
import { ScaleInRetweet } from "./ScaleInRetweet"

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const RetweetButton = ({ size = 40 }) => {
  const { isRetweetedByCurrentUser} = useTwitter()

  const retweetSize = size * 0.6;

  return (
   
    <Wrapper style={{ width: size, height: size }}>
    {isRetweetedByCurrentUser ? (
    <ScaleInRetweet >
      <PoppingCircleRetweet size={size} color={PARTICLE_COLORS[2]}/> 
      <RetweetIcon width={retweetSize} isToggled={isRetweetedByCurrentUser}  onClick/>
    </ScaleInRetweet> ) : 
    (<RetweetIcon width={retweetSize} isToggled={isRetweetedByCurrentUser}  onClick/>)}
    
  </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RetweetButton;
