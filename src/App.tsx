//src/App.tsx
import Login from "./pages/login";
import Registration from "./pages/registration";
import ResetPassword from "./pages/resetPassword";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/it" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
