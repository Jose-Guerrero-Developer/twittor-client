import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
    return (
      <>
        <h5>Sign In</h5>
      </>
    )
  }
}

export default SignIn
