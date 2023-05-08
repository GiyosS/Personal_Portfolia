import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectAuthor from  '../../FormControl/Select'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch} from "react-redux";
import { postAdded } from "./postsSlice";


const AddPosts = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const dispatch = useDispatch()
    const onTitlteChanged  = e=> setTitle(e.target.value)
    const onContentChanged = e=> setContent(e.target.value)
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content,  userId)
            )
            setTitle('')
            setContent('')
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const boxs = 
    <div>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your Title"
        id="postTitle"
        label="Title"
        value={title}
        onChange = {onTitlteChanged}
      />
    </Box>
        <SelectAuthor userId={userId} setUserId={setUserId}/>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
         <TextField
        helperText="Please enter your Content"
        id="postContent"
        label="Content"
        value={content}
        onChange = {onContentChanged}
      />
    </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <Button variant="contained" onClick={onSavePostClicked}
      disabled = {!canSave}>
      Save Post</Button>
    </Box>
    </div>

  return (
    <div>
        {boxs}
    </div>
   
  )
}

export default AddPosts
