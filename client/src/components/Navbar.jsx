import { useEffect, useContext } from "react";
import navbarHideUserProfile from "../scripts/navbar_hide_user_profile";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/images/logo.png";

const Navbar = ({ logout, isAuthenticated }) => {
  useEffect(() => {
    navbarHideUserProfile();
  }, []);

  let { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="sm:px-6 lg:px-8 py-6 px-10 flex items-center fixed top-0 w-full justify-between z-50">
      <div className="relative flex h-16 items-center justify-between w-full">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {/* Icon when menu is open.
                Menu open: "block", Menu closed: "hidden"
              */}
            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-10 w-auto lg:hidden"
              src={logo}
              alt="Your Company"
            />
            <Link to="/">
              <img
                className="hidden h-10 w-auto lg:block"
                src={logo}
                alt="Your Company"
                style={{ height: "6.5rem" }}
              />
            </Link>
          </div>

          <div
            className="hidden sm:ml-6 sm:block text-center pt-4 pb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="flex space-x-4">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link to="/show_cars  "
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Vehículos
              </Link>
              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contacto
              </a>
              {user && (
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Hola {user.name}
                </a>
              )}
              {!user ? (
                <Link
                  className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  to="login"
                >
                  Iniciar sesión
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {user && user.company_position_id === 1 ? (
            <Link
              to="/staff_members"
              className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mr-5"
            >
              Empleados
            </Link>
          ) : null}

          {/* Profile dropdown */}
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                  fill="currentColor"
                >
                  <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
                </svg>
              </button>
            </div>
            <div
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
              id="user-menu"
              style={{ visibility: "hidden" }}
            >
              {/* Active: "bg-gray-100", Not Active: "" */}
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
              >
                Settings
              </a>
              {user ? (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                  onClick={logoutUser}
                >
                  Cerrar sesión
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <script src="/src/scripts/navbar_hide_user_profile.js"> </script>
    </nav>
  );
};

export default Navbar;
