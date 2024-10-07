import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Verification from './pages/Verification';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path ="/verification" element = {<Verification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
