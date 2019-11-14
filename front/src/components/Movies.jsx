import React from "react";
import { Link } from "react-router-dom";

const movTit = {
  color : "white"
}

export default function(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "2%",
        color : "white"
      }}
      className="row"
    >
      {props.movies.Error ? (
        <h3> "NO SE ENCONTRARON PELICULAS!" </h3>
      ) : (
        props.movies.Search &&
        props.movies.Search.map(movie => (
          <div style={movTit} key={movie.imdbID} className="col-xs-3">
            <h6 > {movie.Title} </h6>
            <div>
              <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
