import React, { useState, useEffect } from "react";
import { Profile } from "../../api/";
import { withRouter } from "react-router-dom"
import LayoutDashboard from "../../layouts/LayoutDashboard";
import Banner from "../../components/Banner/"

/**
 * En: Account profile page
 * Es: Página de perfil de cuentas
 */
const _Profile = (props) => {
  const [profile, setProfile] = useState(undefined)
  const { id } = props.match.params
  useEffect(() => {
    Profile.getID(id).then(profile => { setProfile(profile.data) })
  }, [id])
  /**
   * En: Build Profile component
   * Es: Construir componente Profile
   */
  return (
    <LayoutDashboard setSession={ props.setSession }>
      <Banner profile={ profile } />
    </LayoutDashboard>
  )
}

export default withRouter(_Profile);
