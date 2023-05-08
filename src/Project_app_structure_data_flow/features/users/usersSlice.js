import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '0', name: 'Giyos' },
    { id: '1', name: 'David' },
    { id: '2', name: 'Martin' }
]

const usersSlice = createSlice ({
    name: 'users', 
    initialState,
    reducer: {}
})

export const selectAllUsers = (state)=> state.users // comming from store

export default usersSlice.reducer