import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
