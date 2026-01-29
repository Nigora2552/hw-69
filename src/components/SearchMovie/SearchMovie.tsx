import {Grid, MenuItem, Paper, TextField} from "@mui/material";
import {useEffect, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getAllMovies, selectAllMovies} from "../../features/Movies/MoviesSlice.ts";
import {NavLink, useParams} from "react-router-dom";



const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectAllMovies);
    const params = useParams()
    const [value, setValue] = useState('');


    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch]);

    const filterByName = movies.filter(movie => {
        return movie.show.name.toLowerCase().includes(value.toLowerCase())
    })


    return (
        <Grid container spacing={2} sx={{mx: 'auto', alignItems: 'center', justifyContent: 'center'}}>
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
                        <MenuItem key={m.show.name} style={{padding: '8px'}} component={NavLink} to={`/${params.id}`}>{m.show.name}</MenuItem>
                        ))}
                </Paper>
                </>}
            </Grid>
        </Grid>
    );
};

export default SearchMovie;