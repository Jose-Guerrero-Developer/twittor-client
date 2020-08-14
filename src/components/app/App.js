import React from "react";
import Sign from "../../pages/Sign/"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      session: {
        status: false
      }
    }
  }
  render() {
    return (
      this.state.session.status ? <h5>Application ....</h5> : <Sign />
    )
  }
}

export default App;
