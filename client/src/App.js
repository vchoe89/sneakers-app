import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Searched } from "./pages/Searched";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/searched" element={<Searched />} />
          <Route path="/searched/:id" element={<ProductInfo />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
