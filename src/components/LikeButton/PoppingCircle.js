import React from "react"
import styled, {keyframes} from "styled-components"
import {useTwitter} from "../TwitterContext"

const PoppingCircle = ({size, color}) => {

    return (
    <Wrapper style={{width:size, height:size, background:color}} >

    </Wrapper>
    )
}
const fadeIn = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

const scale = keyframes`
from {
    transform: scale(0)
    }
to {
    transform: scale(1)
}
`

const Wrapper = styled.div`
border-radius:50%;
position:absolute;
left:-8px;
top:-8px;
animation: ${fadeIn} 700ms forwards, ${scale} 400ms forwards;
`

export default PoppingCircle;