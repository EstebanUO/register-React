import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Pages/Home/Home";
import { Login } from "./components/Pages/Login/Login";
import { Register } from "./components/Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
