import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Complaints from "./Pages/Complaints";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/complaint" element={<Complaints />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
