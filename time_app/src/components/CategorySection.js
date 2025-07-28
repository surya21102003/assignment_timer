import React, { useState } from 'react';
import TimerItem from './TimerItem';

export default function CategorySection({ category, timers, dispatch }) {
  const [expanded, setExpanded] = useState(true);

  const bulk = status => {
    dispatch({ type: 'BULK_UPDATE_CATEGORY', payload: { category, status, reset: (status==='Paused') } });
  };

  return (
    <div>
      <h2 onClick={() => setExpanded(!expanded)}>
        {category} ({timers.length}) {expanded ? '▼' : '►'}
      </h2>
      <button onClick={() => bulk('Running')}>Start All</button>
      <button onClick={() => bulk('Paused')}>Pause All</button>
      <button onClick={() => bulk('Paused')}>Reset All</button>
      {expanded && timers.map(timer => (
        <TimerItem key={timer.id} timer={timer} dispatch={dispatch} />
      ))}
    </div>
  );
}
