import Homepage from "./assets/pages/Homepage";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import DetailProfilePage from "./assets/pages/DetailProfilePage";
import ProtectedRoute from "../src/routes/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/detail-profile/:userId"
          element={
            <ProtectedRoute>
              <DetailProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
