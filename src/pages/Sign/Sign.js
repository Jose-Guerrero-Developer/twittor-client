import React from "react"
import { Button, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faUsers,
  faSearch,
  faComment } from "@fortawesome/free-solid-svg-icons"

import SignIn from "../../components/sign-in/"
import SignUp from "../../components/sign-up/"
import ModalBasic from "../../components/modals/basic/"

import "./styles.scss"
import LogoWhite from "../../assets/img/logos/white.png"

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      content: null
    }
    this.open = this.open.bind(this);
    this.hidden = this.hidden.bind(this);
  }
  open(content) {
    this.setState({
      show: true,
      content: content
    });
  }
  hidden() {
    this.setState({
      show: false,
      content: null
    });
  }
  render() {
    return (
      <>
        <ModalBasic show={ this.state.show } hidden={ this.hidden }>
          { this.state.content }
        </ModalBasic>
        <section className="sign-container">
          <section className="advertising">
            <section className="top">
              <h1 className="brand">Twittor, Colombia</h1>
            </section>
            <section className="bottom">
              <h5><FontAwesomeIcon icon={faSearch} /> Entérate de los anuncios de tu interés</h5>
              <h5><FontAwesomeIcon icon={faUsers} /> Informate de la vida de tus amigos y artistas preferidos</h5>
              <h5><FontAwesomeIcon icon={faComment} /> Únete a la comunidad más grande en redes sociales en el mundo</h5>
            </section>
          </section>
          <section className="actions">
            <section>
              <img src={LogoWhite} className="logo" alt="Twittor" />
              <h3>¿Quieres saber lo que está pasando en el resto del mundo en este momento?</h3>
              <h5>Únete a Twittor hoy mismo</h5>
              <Form.Group>
                <Button
                  block
                  variant="primary"
                  onClick={() => this.open(<SignUp hidden={ this.hidden } />)}
                >
                  Regístrate
              </Button>
              </Form.Group>
              <Form.Group>
                <Button
                  block
                  variant="outline-primary"
                  onClick={() => this.open(<SignIn hidden={ this.hidden } setSession={ this.props.setSession } />)}
                >
                  Iniciar sesión
                </Button>
              </Form.Group>
              <p>Copyright @ 2020 Twittor Colombia. All rights reserved</p>
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default Sign
