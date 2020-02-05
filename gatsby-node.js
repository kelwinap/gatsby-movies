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


    console.log(JSON.stringify(result.data))

    const id = [530915,
        38700,
        359724,
        475557,
        290859,
        449924,
        501170,
        496243,
        495764,
        486589,
        473033,
        466272,
        181812,
        515001,
        453405,
        653567,
        330457,
        420809,
        920
    ]

    console.log(JSON.stringify(result.data.movies.allMovies.results))


    result.data.movies.allMovies.results.forEach((movie, index) => {
        createPage({
            path: `/movie/${movie.id}/`,
            context: {
                movieId: movie.id
            },
            component: moviePost
        })
    })
}