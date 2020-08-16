import Home from "../pages/Home/"
import Error404 from "../pages/Errors/Error404"

/**
 * En: Application Route Store
 * Es: Almacén de rutas de la aplicación
 */
export const Routes = [
  {
    path: "/",
    exact: true, component: Home
  },
  {
    path: "*",
    component: Error404
  }
]
