import {Grid, MenuItem, Paper, TextField} from "@mui/material";
import {useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getAllMovies, getMovieId, selectAllMovies} from "../../features/MoviesSlice/MoviesSlice.ts";
import {NavLink} from "react-router-dom";


const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectAllMovies);
    const [value, setValue] = useState('');

    const getMovieByID = async (id: string) => {
        await dispatch(getMovieId(id))
    }

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch]);

    const filterByName = movies.filter(movie => {
        return movie.show.name.toLowerCase().includes(value.toLowerCase())
    })


    return (
        <Grid container spacing={2} sx={{mx: 'auto', mb: '20px', alignItems: 'center', justifyContent: 'center'}}>
            <Grid size={3}>
                <h1 style={{fontWeight: 'medium', fontSize: '28px'}}>Search for TV Show: </h1>
            </Grid>
            <Grid size={5}>
                <TextField
                    type='search'
                    fullWidth
                    id="outlined-basic"
                    label="Enter movie"
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {value && <>
                    <Paper sx={{listStyle: 'none'}}>
                        {filterByName.map(m => (
                            <MenuItem key={m.show.id} style={{padding: '8px'}} component={NavLink} to={`/${m.show.id}`}
                                      onClick={() => getMovieByID(m.show.id)}>{m.show.name}</MenuItem>
                        ))}
                    </Paper>
                </>}
            </Grid>
        </Grid>
    );
};

export default SearchMovie;