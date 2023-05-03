import { Link } from "react-router-dom";
import Hero from "./Hero";

// TMDB API key = "9a07857692d5c9aaec99b7a5182567db"
const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl =`/movie/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card" >
                <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <Link to={detailUrl} className="btn btn-primary">Go somewhere</Link>
                    </div>
            </div>
        </div>
    )

}

const Search = ({ keyword, searchResult }) => {
    const title = `You are Searching for ${keyword}`;

    const resultHtml = searchResult.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <>
            <Hero text={title} />
            {resultHtml &&
            <div className="container">
                <div className="row">
                    {resultHtml}
                </div>
            </div>}
        </>
    )
}
export default Search;