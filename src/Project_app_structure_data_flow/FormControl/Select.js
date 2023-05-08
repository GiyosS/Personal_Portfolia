import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { selectAllUsers } from "../features/users/usersSlice";
import { useSelector } from "react-redux";
export default function SelectAuthor({userId, setUserId}) {
  const handleChange  = e => setUserId(e.target.value)
  const users = useSelector(selectAllUsers)
  const usersOptions = users.map( user=> (
    <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
     ))

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Author</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={userId}
          label="Author"
          onChange={handleChange}
        >    
       {usersOptions }
        </Select>
      </FormControl>
    </div>
  );
}