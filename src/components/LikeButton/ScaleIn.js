import React from "react"
import {useSpring, animated} from "react-spring"

export const ScaleIn = ({children}) => {
    const style = useSpring({
      transform: "scale(1)",
      from: {
        transform: "scale(1.2)",
      },
      config: {
        tension: 150,
        friction: 13,      },
    });
  
    return (
    <animated.div style={style}>{children}</animated.div>);
  };