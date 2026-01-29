import type {IMovie} from "../../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import type {RootState} from "../../app/store/store.ts"

interface MovieState {
    movie: IMovie[];
    loading: {
        fetch: boolean;
    }
}

const initialState: MovieState = {
    movie: [],
    loading: {
        fetch: false,
    }
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.pending, (state) => {
            state.loading.fetch = true;
        });
        builder.addCase(getAllMovies.fulfilled, (state, {payload: films}) => {
            state.loading.fetch = false;
            state.movie = films
        });
        builder.addCase(getAllMovies.rejected, (state) => {
            state.loading.fetch = false;
        })
    }
});
export  const selectAllMovies = (state: RootState)=> state.movie.movie;
export  const selectLoading = (state: RootState)=> state.movie.loading.fetch;



export const getAllMovies = createAsyncThunk<IMovie[], void>('movie/getAllMovies',
    async () => {
        const response = await axios.get<IMovie[]>('https://api.tvmaze.com/search/shows?q=csi');
        return  response.data

    }
)

export const movieReducer = movieSlice.reducer;