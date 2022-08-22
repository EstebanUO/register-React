import { Register } from "./Components/Page/Register/Register";
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Page/Home/Home";
import { Login } from "./Components/Page/Login/Login";

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
