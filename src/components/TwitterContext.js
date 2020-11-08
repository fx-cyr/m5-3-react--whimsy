import React, {createContext, useContext, useState} from "react"
import moment from "moment"
import avatar from "../assets/carmen-sandiego.png";

const TwitterContext = createContext(null)

export const TwitterProvider = ({children}) => {
    const tweetContents="Where in the world am I?";
    const displayName="Carmen Sandiego ✨";
    const username="carmen-sandiego";
    const avatarSrc = avatar;
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');  
    const [isLiked, setIsLiked] = useState(false)
    const [isRetweeted, setIsRetweeted] = useState(false)
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65)
    const isRetweetedByCurrentUser = isRetweeted;
    const isLikedByCurrentUser = isLiked;

    const handleLikeBtn = () => {
        if (isLiked){
            setNumOfLikes(numOfLikes + 1)
            setIsLiked(!isLiked) }
}
    

    return <TwitterContext.Provider 
        value={{tweetContents, 
                displayName,      
                username,
                avatarSrc,
                isRetweetedByCurrentUser,
                isLikedByCurrentUser,
                date,
                numOfLikes, setNumOfLikes,
                numOfRetweets, setNumOfRetweets}}>
                    {children}
        </TwitterContext.Provider>
}

export const useTwitter = () => {
    return useContext(TwitterContext)
}