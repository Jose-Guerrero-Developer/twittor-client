/**
 * En: Validate email type field
 * Es: Validar campo de tipo correo electrónico
 * @param {*} email 
 */
export const isEmailValid = (email) => {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailValid.test(String(email).toLowerCase());
}
