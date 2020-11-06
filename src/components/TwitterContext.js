import React, {createContext, useContext} from "react"
import moment from "moment"
import avatar from "../assets/carmen-sandiego.png";

const TwitterContext = createContext(null)

export const TwitterProvider = ({children}) => {
    const tweetContents="Where in the world am I?";
    const displayName="Carmen Sandiego ✨";
    const username="carmen-sandiego";
    const avatarSrc= avatar;
    const isRetweetedByCurrentUser=false;
    const isLikedByCurrentUser=false;

    const date = new Date();

    return <TwitterContext.Provider 
        value={{tweetContents, 
                displayName, 
                username,
                avatarSrc,
                isRetweetedByCurrentUser,
                isLikedByCurrentUser,
                date}}>
                    {children}
        </TwitterContext.Provider>
}

export const useTwitter = () => {
    return useContext(TwitterContext)
}