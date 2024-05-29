import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignUp from "./Components/SignUp";
import UserDash from "./Components/UserDash";
import Signin from "./Components/Signin";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/userDash" element={<UserDash />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
