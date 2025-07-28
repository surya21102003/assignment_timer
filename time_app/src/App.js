import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import { timersReducer, initialState } from './store/timersReducer';

function App() {
  const [state, dispatch] = useReducer(timersReducer, initialState);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('timerAppState');
    if (saved) dispatch({ type: 'LOAD_STATE', payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem('timerAppState', JSON.stringify(state));
  }, [state]);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/history">History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage state={state} dispatch={dispatch} />} />
        <Route path="/history" element={<HistoryPage history={state.history} />} />
      </Routes>
    </Router>
  );
}

export default App;
