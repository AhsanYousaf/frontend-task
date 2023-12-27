import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './authentication/AuthContext';
import LazyLoad from "react-lazy-load";
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { token } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/home-page" /> : <LazyLoad><LoginPage /></LazyLoad>} />
          <Route path="/home-page" element={token ? <LazyLoad><HomePage /></LazyLoad> : <Navigate to="/" />} />
          <Route path="/404" element={<LazyLoad><PageNotFound /></LazyLoad>} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
