import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import WelcomePage from "./components/welcomePage/WelcomePage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <WelcomePage />
      <Routes location={location} key={location.pathname}>
        <Route />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
