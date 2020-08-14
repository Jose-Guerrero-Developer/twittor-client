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
          rtl={false}
          position="top-right"
          draggable
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          hideProgressBar={false}
          pauseOnFocusLoss />
      </>
    )
  }
}

export default App;
