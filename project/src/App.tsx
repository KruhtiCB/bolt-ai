import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Career from './pages/Career';
import WhyJoinUs from './pages/WhyJoinUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Career />} />
        <Route path="/career" element={<Career />} />
        <Route path="/why-join-us" element={<WhyJoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;