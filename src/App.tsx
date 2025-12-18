import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./components/form";
import Home from "./components/home";
import Loader from "./components/loader";

const App: React.FC = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/home");
  };

  const gotoForm = () => {
    navigate("/form");
  };

  const gotoLoader = () => {
    navigate("/loader");
  };

  return (
    <div>
      <nav>
        <button onClick={gotoHome}>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text">Home</span>
        </button>

        <button onClick={gotoForm}>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text">Form</span>
        </button>

        <button onClick={gotoLoader}>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text">Load</span>
        </button>
      </nav>
      <br></br>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </div>
  );
}

export default App;
