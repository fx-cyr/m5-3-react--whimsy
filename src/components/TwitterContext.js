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

    const handleToggleLike = () => {
        if (!isLiked) {
        setIsLiked(true)
        setNumOfLikes(numOfLikes + 1)
        console.log("+1")
    }
    else {
        setIsLiked(false)
        setNumOfLikes(numOfLikes - 1)
        console.log("-1")
    }
    }

    const handleToggleRetweet = () => {
        if (!isRetweeted) {
        setIsRetweeted(true)
        setNumOfRetweets(numOfRetweets + 1)
        console.log("+1")
    }
    else {
        setIsRetweeted(false)
        setNumOfRetweets(numOfRetweets - 1)
        console.log("-1")
    }
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
                numOfRetweets, setNumOfRetweets,
                handleToggleLike, handleToggleRetweet}}>
                    {children}
        </TwitterContext.Provider>
}

export const useTwitter = () => {
    return useContext(TwitterContext)
}