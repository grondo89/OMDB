import React, { Component } from "react";
import SignUp from "../components/SignUp";
import axios from "axios";
import { connect } from "react-redux";
import { logUser } from "../redux/actions/useractioncreators";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailInput(e) {
    let input = e.target.value;
    this.setState({ email: input });
  }

  handlePassInput(e) {
    let input = e.target.value;
    this.setState({ password: input });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      console.log(this.state);
      return axios
        .post("/users", {
          email: this.state.email,
          password: this.state.password
        })
        .then(user => {
          this.props.logUser({
            email: user.data.email,
            password: this.state.password
          });
        });
    }
  }

  render() {
    return (
      <SignUp
        handleEmailInput={this.handleEmailInput}
        handlePassInput={this.handlePassInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logUser: name => dispatch(logUser(name)),
  // fetchFavs: userId => dispatch(fetchFavs(userId)),
  // fetchFavMovie: movie => dispatch(fetchFavMovie(movie))
});

export default connect(null, mapDispatchToProps)(SignUpContainer);
