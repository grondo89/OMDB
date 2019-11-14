import React from "react";
import { Link } from "react-router-dom";

const movTit = {
  color : "white"
}

export default function(props) {
  props.user? console.log(props) : console.log("fijate")
  return (
    <div style={movTit} className="container">
      <h2>User Favorites</h2>
      {props && props.user ? console.log(props.user) : console.log("maldicion")}

      <div >
        {props.user && props.user.favorites.length > 0 ? (
          props.user.favorites.map(fav => (
            <button
              className="btn btn-dark"
              onClick={props.movieFinder}
              key={fav.id}
            >
              {fav}
            </button>
          ))
        ) : (
          <div>"Este usuario no tiene favoritos"</div>
        )}
      </div>
    </div>
  );
}
