import React from "react";
import "./styles.scss";
import { Modal } from "react-bootstrap";
import LogoWhite from "../../../assets/img/logos/white.png";

export default class ModalBasic extends React.Component {
  /**
   * En: Building the ModalBasic component
   * Es: Construir el componente ModalBasic
   */
  render() {
    return (
      <Modal
        size="lg"
        show={ this.props.show }
        onHide={() => this.props.hidden() }
        centered
        className="basic-modal"
      >
        <Modal.Header>
          <Modal.Title>
            <img src={ LogoWhite } alt="Twittor" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { this.props.children }
        </Modal.Body>
      </Modal>
    )
  }
}
