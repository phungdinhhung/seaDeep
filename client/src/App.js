import React from 'react';
import AppRouter from './routes/index';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
   return (
      <div className="App">
      <Router>
         <Routes>
            <Route path="*" element={<AppRouter />} />
         </Routes>
      </Router>
      </div>
   );
}

export default App;
