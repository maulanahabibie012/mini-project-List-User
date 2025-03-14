import Logo from "../../images/Logo-Travalizer.png";
import ImgHero from "../../images/img-hero.png";
import useLogin from "../../../hooks/useLogin";
import Toast from "../../components/UI/toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { inputData, handleChange, handleLogin, loading, toast, setToast } =
    useLogin();

  const buttonText = loading ? (
    <span className="loading loading-spinner loading-md">Loading</span>
  ) : (
    "Login"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
          <label class="flex flex-col">
            <span class="...">Email</span>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={inputData.email}
              placeholder="Email Address"
              class="border border-gray-500 rounded-full h-10"
            />
          </label>

          <label class="flex flex-col">
            <span class="...">Password</span>
            <input
              onChange={handleChange}
              value={inputData.password}
              type="Password"
              name="password"
              placeholder="Password"
              class="border border-gray-500 rounded-full h-10"
            />
          </label>

          <button
            onClick={handleLogin}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            {buttonText}
          </button>
          <div className="flex justify-center">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-olive-700 hover:text-olive-800 dark:text-olive-300 dark:hover:text-olive-400"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
