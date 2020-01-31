import * as React from "react";
import { withLayout } from "../components/Layout";
import Header from "../components/HeaderMenu/HeaderMenu";
import {
	Container,
	Card,
	Image,
} from "semantic-ui-react";

const IndexPage = (props) => {
	console.log(props.data.movies.allMovies.results);
	return (
		<>
			<Header />
			<div style={{ flex: 1 }} >
				<Card.Group style={{ justifyContent: "center" }}>
					{props.data.movies.allMovies.results.map((movie) => {
						return (<Card>
							<Image src={`http://image.tmdb.org/t/p/w185/${movie.posterPath}`} wrapped ui={false} />
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
  allMovies{      
    results {
      title
      releaseDate
      posterPath
      id            
		voteAverage     
		overview 
      crew(departments: directing) {
        job
        name 
      }
    }
  }
}
}`;