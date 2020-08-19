import React from "react";
import "./styles.scss";
import { HOST } from "../../utils/constants";
import LogoWhite from "../../assets/img/logos/white.png";
import { ButtonEditAccount } from "./ButtonEditAccount"
import { ButtonFollowAccount } from "./ButtonFollowAccount"
import { ContextSessionState } from "../../contexts/contextSessionState";
import { Row, Col, Container } from "react-bootstrap";

/**
 * En: Banner component
 * Es: Componente banner
 */
export default (props) => {
  const { profile } = props
  const { id: idAccount } = ContextSessionState().profile
  const avatar = profile?.avatar ? `${ HOST }/api/profiles/${ profile.id }/avatar` : undefined
  const banner = profile?.banner ? `${ HOST }/api/profiles/${ profile.id }/banner` : undefined
  /**
   * En: Build banner component
   * Es: Construir componente banner
   */
  return (
    <>
      { profile?.id ?
          <Container className="content-banner">
            <Row>
              <Col>
                <h5>{ profile ? `${ profile?.name } ${ profile?.lastName }` : undefined }</h5>
                { profile
                  ? <div
                      style={{ backgroundImage: `url('${ banner }')` }}
                      className="photo-profile"
                    >
                      <div
                        style={{ backgroundImage: `url('${ avatar || LogoWhite }')` }}
                        className="photo-avatar"
                      />
                    </div>
                  : undefined }
              </Col>  
            </Row>
            <Row>
              <Col className="text-right">
                { profile && (idAccount === profile.id) && (<ButtonEditAccount />) }
                { profile && (idAccount !== profile.id) && (<ButtonFollowAccount />) }
              </Col>
            </Row>
          </Container>
        : <h5>Perfil de usuario no encontrado...</h5>
      }
    </>
  )
}
