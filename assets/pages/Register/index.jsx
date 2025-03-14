import Logo from "../../images/Logo-Travalizer.png";
import ImgHero from "../../images/img-hero.png";
import Toast from "../../components/UI/toast";
import useRegister from "../../../hooks/useRegister";

import { Link } from "react-router-dom";

const Register = () => {
  const { dataRegister, handleChange, handleRegister, loading, toast, setToast } = useRegister();

  const buttonText = loading ? (
    <span className="loading loading-spinner loading-md">Loading</span>
  ) : (
    "Register"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <div className="flex flex-col items-center w-full h-screen lg:flex-row">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      <div className="container flex flex-row items-center justify-center p-2 bg-blue-500 lg:hidden">
        <img className="" src={Logo} alt="logo" />
        <h1 className="text-4xl text-amber-50">Travalizer</h1>
      </div>
      <div className="container flex flex-row items-center justify-center p-8 bg-white lg:bg-blue-500 lg:w-full lg:h-full lg:rounded-r-2xl lg:shadow-2xl lg:z-10 lg:shadow-blue-500/50 ">
        <img src={ImgHero} alt="imghero" />
      </div>
      <div className="container flex flex-col gap-8 p-8 bg-white">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center bg-blue-500 min-[0px]:hidden">
          <img className="" src={Logo} alt="logo" />
          <h1 className="text-4xl text-amber-50">Travalizer</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={dataRegister.email}
              className="w-full h-10 border border-gray-500 rounded-full"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={dataRegister.password}
              className="w-full h-10 border border-gray-500 rounded-full"
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={dataRegister.confirmPassword}
              id="confirm-password"
              className="w-full h-10 border border-gray-500 rounded-full"
            />
          </div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            {buttonText}
          </button>
          <div>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-olive-700 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-500 font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
