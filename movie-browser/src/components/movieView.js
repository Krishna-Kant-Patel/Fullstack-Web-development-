import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const MovieView = () => {

    const {id} = useParams()
    console.log(id)
    const [MovieDetails, setMovieDetails] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // console.log('make api request ', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US`)
        .then(res => res.json())
        .then(data => {
            setMovieDetails(data)
            setLoading(false)
        })

    },[id]);

    function LoadingRender(){
        const posterpath = `https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`
        const Backdrop = `https://image.tmdb.org/t/p/original${MovieDetails.backdrop_path}`
        console.log(Backdrop)
        if(isLoading){
           return <Hero text = "Loading...." />

        }
        if(MovieDetails){
            
            return (
                <>
            <Hero text = {MovieDetails.original_title} backdrop = {Backdrop} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterpath} className="img-fluid shadow rounded" alt="...."/>
                    </div>
                    <div className="col-md-9">
                        <h2>{MovieDetails.original_title}</h2>
                        <p className="lead">{MovieDetails.overview}</p>
                        <p className="lead">language: {MovieDetails.original_language}</p>
                        <p className="lead">Status: {MovieDetails.status}</p>
                    </div>
                </div>
            </div>
            </>)
        }
    }


     return LoadingRender()
}
export default MovieView;