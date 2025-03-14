import Logo from "../../images/Logo-Travalizer.png";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import Toast from "../UI/toast";


export default function Navbar() {
  const { handleLogout, toast, setToast } = useLogin();
  const menuNav = ["List User"];
  const token = localStorage.getItem("access_token");

  return (
    <>
    <div class="fixed z-10 w-full bg-white dark:bg-gray-900">
    {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    <nav class="container w-full mx-auto bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex items-center justify-between mx-auto p-2">
          <img className="bg-blue-500" src={Logo} alt="" />
          <div class="w-full" id="navbar-default">
            <ul class="font-medium flex items-center border-gray-100 rounded-lg flex-row space-x-8 space-x-reverse mt-0 border-0 bg-white dark:bg-gray-900 dark:border-gray-700">
              <li class="flex gap-4 w-full">
                {menuNav.map((item, keyitem) => (
                  <Link key={keyitem} to="/" class="block py-2 pl-3 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                    <p class="flex">{item}</p>
                  </Link>
                ))}
              </li>
              <li>
              {/* <Link className="bg-white hover:bg-blue-700 hover:text-white text-gray-700 font-bold py-2 px-4 rounded" to="/login">logout</Link> */}
              {token && <button className="bg-white hover:bg-blue-700 hover:text-white text-gray-700 font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>}
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
      
    </>
  );
}
