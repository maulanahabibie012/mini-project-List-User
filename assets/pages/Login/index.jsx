import Logo from "../../images/Logo-Travalizer.png";
import ImgHero from "../../images/img-hero.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      email: email,
      password: password,
      expiresInMins: 30,
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        console.log("data berhasil", res);
        setMessage("Berhasil Login", res.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log("data error", err);
        setMessage(err.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center w-full h-screen lg:flex-row">
      <div className="container flex flex-row items-center justify-center p-2 bg-blue-500 lg:hidden">
        <img className="" src={Logo} alt="logo" />
        <h1 className="text-4xl text-amber-50">Travalizer</h1>
      </div>
      <div className="container flex flex-row items-center justify-center p-8 bg-white lg:bg-blue-500 lg:w-full lg:h-full lg:rounded-r-2xl lg:shadow-2xl lg:z-10 lg:shadow-blue-500/50 ">
        <img src={ImgHero} alt="imghero" />
      </div>
      <form className="container flex flex-col gap-8 p-8 bg-white">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center bg-blue-500 min-[0px]:hidden">
          <img className="" src={Logo} alt="logo" />
          <h1 className="text-4xl text-amber-50">Travalizer</h1>
        </div>
        <div>
          <label class="flex flex-col">
            <span class="...">Email</span>
            <input
              onChange={handleEmailChange}
              type="email"
              placeholder="Email"
              class="border border-gray-500 rounded-full h-10"
            />
          </label>
        </div>
        <div>
          <label class="flex flex-col">
            <span class="...">Password</span>
            <input
              onChange={handlePasswordChange}
              type="Password"
              placeholder="Password"
              class="border border-gray-500 rounded-full h-10"
            />
          </label>
        </div>
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        {message && <div className="text-green-500 flex justify-center">{message}</div>}
        <div className="flex justify-center">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
