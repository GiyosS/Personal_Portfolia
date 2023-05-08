
import React from 'react'
import { reactionAdded } from "./postsSlice";
import {useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}
const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()
    //The Object.entries() method returns an array of a given object's
    const reactionButtons =  Object.entries(reactionEmoji).map(([name, emoji]) =>{
        return (
            <Button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </Button>
        )
    })
    return <div>{reactionButtons}</div>
}
export default ReactionButtons
