import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/ParkMiHyun" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>

    </Router>

  );
}

export default App;
