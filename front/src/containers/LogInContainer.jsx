import React, { Component } from "react";
import LogIn from "../components/LogIn";
import { connect } from "react-redux";
import { logUser } from "../redux/actions/useractioncreators";

class LogInContainer extends Component {
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
          this.props.logUser({
            email: this.state.email,
            password: this.state.password
          });

    }
  }
  render() {
    return (
      <LogIn
        handleEmailInput={this.handleEmailInput}
        handlePassInput={this.handlePassInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

  
  const mapDispatchToProps = (dispatch, ownProps) => ({
      logUser: name => dispatch(logUser(name)),
  });
  
  export default connect(null, mapDispatchToProps)(LogInContainer)
