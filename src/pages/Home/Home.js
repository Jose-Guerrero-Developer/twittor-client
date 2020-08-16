import React from "react";
import LayoutDashboard from "../../layouts/LayoutDashboard";

/**
 * En: Main page of the application
 * Es: Página principal de la aplicación
 */
export default class Home extends React.Component {
  /**
   * En: Build component Home
   * Es: Construir componente Home
   */
  render() {
    return (
      <LayoutDashboard setSession={ this.props.setSession }>
        <h5>Home applicaction</h5>
      </LayoutDashboard>
    )
  }
}
