
import {selectAllMovies, selectLoading} from "../../features/MoviesSlice/MoviesSlice.ts";
import {useAppSelector} from "../../app/hooks.ts";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CircularProgress, Grid} from "@mui/material";


const AllInfoAboutMovie = () => {
    const movies = useAppSelector(selectAllMovies);
    const loading = useAppSelector(selectLoading);

    return (
        <>
            {loading && <CircularProgress/>}
            {!loading && (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    {movies.map(movie => (
                        <Grid key={movie.show.id} container sx={{mx: 'auto', marginBottom: '10px'}}>
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    sx={{height: 300}}
                                    image={movie.show.image.medium}
                                    title={movie.show.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {movie.show.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        {movie.show.summary}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}</div>
            )}
        </>


    );
};

export default AllInfoAboutMovie;