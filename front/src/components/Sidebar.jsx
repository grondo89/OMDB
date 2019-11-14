import React from "react";
import { Link } from "react-router-dom";

const favStyle = {
  color: "grey",
  margin : "1% 0%"
};

const favDiv = {
  display : "flex",
  justifyContent : "center",
  flexDirection : "column"
}

const favHeader = {
  display : "flex",
  justifyContent : "center",
}

export default props => (
  <div className="col-xs-3">
    <section className="sidebar">
      <section>
        <div>
        <h4 className="text-muted">{props.user.email}'s FAVORITES</h4>
        <ul className="list-unstyled" />
        </div>
        <h4>
          <div style={favDiv}>
            {props.user.favorites && props.user.favorites.length > 0 ? (
              props.user.favorites.map(fav => (
                <button onClick={props.movieFinder} style={favStyle} key={fav.id} className="btn btn-dark" >
                  {fav}
                  {console.log(props)}
                </button>
              ))
            ) : (
              <div>
                <h4>NO TIENES FAVORITOS</h4>
              </div>
            )}
          </div>
        </h4>
      </section>
    </section>
  </div>
);


