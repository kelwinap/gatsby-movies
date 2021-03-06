import * as React from "react";
import { withLayout } from "../components/Layout";
import { Grid, Image, Embed } from 'semantic-ui-react'
import { graphql } from "gatsby"

const MoviesPage = (props) => {

    const movie = props.data.movies.movie

    if (movie) {
        return (
            <div>
                <Grid style={{ marginTop: 50 }} textAlign='center'>
                    <Grid.Row>
                        <Grid.Column verticalAlign="top" textAlign="center" mobile={12} tablet={12} computer={4}  >
                            <Image centered style={{ height: 330, width: 220, borderRadius: 5 }} src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} />
                        </Grid.Column>
                        <Grid.Column mobile={12} tablet={12} computer={8}>
                            <h1 style={{ color: "#454569", fontWeight: 'bold', textAlign: 'left' }}>{movie.title}</h1>
                            <p style={{ color: "#BEBEC2", textAlign: 'left' }}>{movie.releaseDate}</p>
                            <p style={{ color: "#BEBEC2", textAlign: 'left' }}>Rating: {movie.voteAverage}</p>
                            <p style={{ color: "#BEBEC2", textAlign: 'left' }}>{movie.overview}</p>
                            {movie.videos.length > 0 &&
                                <Grid.Row>
                                    <Grid.Column textAlign="center" mobile={12} tablet={12} computer={12} verticalAlign='bottom' >
                                        <Embed
                                            active
                                            autoplay
                                            id={movie.videos[0].key}
                                            source='youtube'
                                            iframe={{
                                                allowFullScreen: true,
                                                style: {},
                                            }}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );

    }
    else {
        return (<p>Filme não encontrado</p>)
    }

};
export default withLayout(MoviesPage);

export const Query = graphql`
query MoviesQuery($movieId: ID!){
    movies {
        movie(id: $movieId ){          
            title
            releaseDate
            posterPath
            id            
            voteAverage     
            overview
            videos(type: TRAILER) {
                key
                site
            }
        }  
    }
}`;