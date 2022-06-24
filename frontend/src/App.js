import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="kuca-container">
          <AnimatedRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
