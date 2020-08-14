import React from "react";
import { ToastContainer } from 'react-toastify'
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
      <>
        { this.state.session.status ? <h5>Application ....</h5> : <Sign /> }
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </>
    )
  }
}

export default App;
