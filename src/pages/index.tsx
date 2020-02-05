import * as React from "react";
import { withLayout } from "../components/Layout";
import Header from "../components/HeaderMenu/HeaderMenu";
import { Card } from "semantic-ui-react";
import { navigate } from "gatsby"

const IndexPage = (props) => {

	console.log(props.data.movies.allMovies.results);
	return (
		<>
			<Header />
			<div style={{ flex: 1 }} >
				<Card.Group style={{ justifyContent: "center" }}>
					{props.data.movies.allMovies.results.map((movie) => {
						return (<Card style={{ boxShadow: "0 0 0 0px #D4D4D5, 0 6px 0 0 rebeccapurple, 0 0px 0px 0 #D4D4D5" }} color='green' key={movie.id} onClick={() => navigate("/movie/" + movie.id, {
							state: { movieId: movie.id },
						})}>
							<img src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} style={{ height: 350, width: 290 }} />
							<Card.Content>
								<Card.Header>{movie.title}</Card.Header>
								<Card.Meta>
									<span className="date">Rating: {movie.voteAverage}</span>
								</Card.Meta>
								<Card.Description>
									{movie.overview}
								</Card.Description>
							</Card.Content>
						</Card>);
					})
					}
				</Card.Group>
			</div>
		</>);
};
export default withLayout(IndexPage);

export const pageQuery = graphql`
query {
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
}`;