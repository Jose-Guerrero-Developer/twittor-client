import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Auth } from "../../api/"
import LogoWhite from "../../assets/img/logos/white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser,
  faHome,
  faUsers,
  faRetweet,
  faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, Button } from "react-bootstrap";

/**
 * En: Application side menu
 * Es: Menú lateral de la aplicación
 */
export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  /**
   * En: Remove session status
   * Es: Remover estado de sesión
   */
  logout() {
    Auth.logOff()
    this.props.setSession(false)
  }
  /**
   * En: Build component Side bar
   * Es: Construir componente Side bar
   */
  render() {
    return (
      <div className="side-bar">
        <img src={ LogoWhite } alt="Twittor" className="logo" />
        <h5 className="brand">Twittor Colombia</h5>
        <Button
          block
          className="btn-new-tweet"
        >
          <FontAwesomeIcon icon={ faRetweet } /> Publicar Tweet
        </Button>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Link to="/">
              <FontAwesomeIcon icon={ faHome } /> Inicio
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/users">
              <FontAwesomeIcon icon={ faUsers } /> Usuarios
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/profile">
              <FontAwesomeIcon icon={ faUser } /> Mi Perfil
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="" onClick={ this.logout }>
              <FontAwesomeIcon icon={ faPowerOff } /> Cerrar Sesión
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}
