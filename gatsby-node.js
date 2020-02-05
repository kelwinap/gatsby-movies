const path = require('path')

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions

    console.log(graphql)

    const moviePost = path.resolve(`./src/templates/movie.tsx`)

    const result = await graphql(`query {
                                        movies {
                                            allMovies(page: 1) {      
                                                results {
                                                        title
                                                        releaseDate
                                                        posterPath
                                                        id            
                                                        voteAverage     
                                                        overview       
                                                }
                                            }
                                        }
                                    }`)

    const movies = result.data.movies.allMovies.results;

    movies.forEach((movie, index) => {
        createPage({
            path: `/movie/${movie.id}/`,
            context: {
                movieId: movie.id
            },
            component: moviePost
        })
    })
}