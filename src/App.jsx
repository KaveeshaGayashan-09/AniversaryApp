import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Memories from './pages/Memories';
import Future from './pages/Future';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/future" element={<Future />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
