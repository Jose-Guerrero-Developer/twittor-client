import React from "react";
import SideBar from "../components/side-bar/";
import { Container, Col, Row } from "react-bootstrap";

/**
 * En: Home page template
 * Es: Plantilla páginas principales
 */
export default class LayoutDashboard extends React.Component {
  /**
   * En: Build Dashboard Layout Component
   * Es: Construir componente Layout Dashboard
   */
  render() {
    return (
      <Container className="layout-content">
        <Row>
          <Col xs="3">
            <SideBar setSession={ this.props.setSession } />
          </Col>
          <Col>
            { this.props.children }
          </Col>
        </Row>
      </Container>
    )
  }
}
