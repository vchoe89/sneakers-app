import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Shoes } from "./pages/Shoes";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shoes" element={<Shoes />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
