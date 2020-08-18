import Home from "../pages/Home/"
import Error404 from "../pages/Errors/Error404"
import Profile from "../pages/Profile/Profile"

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
    path: "/profile/:id",
    exact: true, component: Profile
  },
  {
    path: "*",
    component: Error404
  }
]
