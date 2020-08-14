import React from "react"
import { Modal } from "react-bootstrap";

import "./styles.scss"
import LogoWhite from "../../../assets/img/logos/white.png"

class ModalBasic extends React.Component {
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

export default ModalBasic
