import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import {routes} from "./routes";

function App() {
  return (
    <Router>
      <Navbar />
{/*       <Sidebar /> */}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} /> // eslint-disable-line react/jsx-props-no-spreading
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
