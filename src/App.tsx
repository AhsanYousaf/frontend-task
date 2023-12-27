import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './authentication/AuthContext';
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { token } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/landing-page" /> : <LoginPage />} />
          <Route path="/landing-page" element={token ? <MainPage /> : <Navigate to="/landing-page" />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
