import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navBar/NavBar";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;