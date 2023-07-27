import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";
import './App.css';
import Layout from "./components/Layout"
import NotFound from "./components/NotFound";
import Event from "./components/Event";
import Register from "./components/Register";
import BrandBest from "./components/BrandBest";
import TotalBest from "./components/TotalBest";
import BeautyBest from "./components/BeautyBest";
import BestTemplate from "./components/BestTemplate";


function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>
          {/* 홈 */}
          <Route path="/shopping" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* 혜택존 */}
          <Route path="/event" element={<Event />} />
          
          {/* 베스트 */} 
          <Route element={<BestTemplate />}>  
            <Route path="/brandBest" element={<BrandBest />} />          
            <Route path="/totalBest" element={<TotalBest />} />          
            <Route path="/beautyBest" element={<BeautyBest />} />          
          </Route>  
          
          {/* 프로필 */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
