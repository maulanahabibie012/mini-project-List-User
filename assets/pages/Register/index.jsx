import Logo from "../../images/Logo-Travalizer.png";
import ImgHero from "../../images/img-hero.png";

export default function Register() {
  return (
    <div className="flex flex-col items-center w-full h-screen lg:flex-row">
      <div className="container flex flex-row items-center justify-center p-2 bg-blue-500 lg:hidden">
        <img className="" src={Logo} alt="logo" />
        <h1 className="text-4xl text-amber-50">Travalizer</h1>
      </div>
      <div className="container flex flex-row items-center justify-center p-8 bg-white lg:bg-blue-500 lg:w-full lg:h-full lg:rounded-r-2xl lg:shadow-2xl lg:z-10 lg:shadow-blue-500/50">
        <img src={ImgHero} alt="imghero" />
      </div>
      <form className="container flex flex-col gap-8 p-8 bg-white">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center bg-blue-500 min-[0px]:hidden">
          <img className="" src={Logo} alt="logo" />
          <h1 className="text-4xl text-amber-50">Travalizer</h1>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
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
            id="password"
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
            id="confirm-password"
            className="w-full h-10 border border-gray-500 rounded-full"
          />
        </div>
        <div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            Register
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Already have an account?<a className="text-blue-500" href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}
