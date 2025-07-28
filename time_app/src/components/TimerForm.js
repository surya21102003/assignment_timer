
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TimerForm({ dispatch }) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(60);
  const [category, setCategory] = useState('');
  const [halfwayAlert, setHalfwayAlert] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TIMER',
      payload: {
        id: uuidv4(),
        name,
        duration,
        remaining: duration,
        category,
        status: 'Paused',
        halfwayAlert,
      }
    });
    setName('');
    setDuration(60);
    setCategory('');
    setHalfwayAlert(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={duration} onChange={e => setDuration(+e.target.value)} placeholder="Duration (sec)" required />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
      <label>
        <input type="checkbox" checked={halfwayAlert} onChange={e => setHalfwayAlert(e.target.checked)} />
        Halfway alert
      </label>
      <button type="submit">Add Timer</button>
    </form>
  );
}
