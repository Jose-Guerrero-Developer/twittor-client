import React from "react";
import Sign from "../Sign";
import { Auth } from "../../api/auth";
import Router from "../../routes/router";
import { SessionContext } from "../../contexts/session";
import { ToastContainer } from "react-toastify";

/**
 * En: Main page of the application
 * Es: Página principal de la aplicación
 */
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      session: this.getSession()
    }
    this.setSession = this.setSession.bind(this)
  }
  /**
   * En: Get session status
   * Es: Obtener el estado de la sesión
   * @return {*}
   */
  getSession() {
    return {
      status:  Auth.statusSession(),
      profile: Auth.payload()
    }
  }
  /**
   * En: Sets session status
   * Es: Establecer el estado de la sesión
   * @param {*} state 
   */
  setSession(state) {
    this.setState({
      session: { 
        status:  state,
        profile: this.getSession().profile
      }
    })
  }
  /**
   * En: Building the App component
   * Es: Construir el componente App
   */
  render() {
    return (
      <SessionContext.Provider value={ this.state.session }>
        { !this.state.session.status 
          ? <Sign   setSession={ (state) => this.setSession(state) } />
          : <Router setSession={ (state) => this.setSession(state) } /> }
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
