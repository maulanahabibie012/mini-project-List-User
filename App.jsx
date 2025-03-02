import Homepage from "./assets/pages/Homepage";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
``

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )

}