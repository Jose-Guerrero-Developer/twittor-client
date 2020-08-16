import React from "react";
import { map } from "lodash"
import { Routes } from "./routes"
import {
  Switch, Route, 
  BrowserRouter as Router } from "react-router-dom"

/**
 * En: Build the application routing system
 * Es: Construir el sistema de rutas de la aplicación
 */
export default class AppRouter extends React.Component {
  /**
   * En: Build App Router component
   * Es: Construir componente App Router
   */
  render() {
    return (
      <Router>
        <Switch>
          { map(Routes, ({ path, exact, component }, index) => (
            <Route key={ index } path={ path } exact={ exact } component={ component } />
          )) }
        </Switch>
      </Router>
    )
  }
}
