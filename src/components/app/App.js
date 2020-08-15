import React from "react";
import Sign from "../../pages/Sign/"
import { Auth } from '../../api/auth'
import { SessionContext } from '../../contexts/Session'
import { ToastContainer } from "react-toastify"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      session: {
        status: Auth.StatusSession()
      }
    }
    this.setSession = this.setSession.bind(this)
  }
  setSession(state) {
    this.setState({
      session: { 
        ...this.state.session, status: state }
    })
  }
  render() {
    return (
      <SessionContext.Provider value={ this.state.session }>
        { this.state.session.status ? <h5>Application ....</h5> : <Sign setSession={ (state) => this.setSession(state) } /> }
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
      </SessionContext.Provider>
    )
  }
}

export default App;
