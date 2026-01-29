import {createSlice} from "@reduxjs/toolkit";
// import type {RootState} from "../../app/store/store.ts";

interface valueState {
    nameOfMovie: string;
}

const initialState: valueState = {
    nameOfMovie: '',
}

export const userSlice = createSlice({
    name: 'nameOfMovie',
    initialState,
    reducers: {
        getName: (state, action) => {
            state.nameOfMovie = action.payload;
        }
    }
})

// export  const selectAllMovies = (state: RootState)=> state.user.nameOfMovie;

export  const {getName} = userSlice.actions;
export const userReducer = userSlice.reducer;