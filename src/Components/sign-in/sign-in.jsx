import React from "react";
import FormInput from "../form-input/form-input";
import CustomBtn from "../custom-btn/custom-btn";
import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.email, this.state.password);

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I alredy have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <CustomBtn type="submit">Sign In</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignIn;
