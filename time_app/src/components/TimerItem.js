import React, { useEffect } from 'react';

export default function TimerItem({ timer, dispatch }) {
  useEffect(() => {
    if (timer.status === 'Running') {
      const interval = setInterval(() => {
        dispatch({
          type: 'UPDATE_TIMER',
          payload: { id: timer.id, updates: { remaining: timer.remaining - 1 } }
        });

        if (timer.halfwayAlert && timer.remaining === Math.ceil(timer.duration / 2) + 1) {
          alert(`Halfway reached: ${timer.name}`);
        }

        if (timer.remaining <= 1) {
          dispatch({
            type: 'COMPLETE_TIMER',
            payload: {
              id: timer.id,
              name: timer.name,
              completedAt: Date.now(),
              category: timer.category
            }
          });
          clearInterval(interval);
          alert(`🎉 Timer "${timer.name}" completed!`);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer.status, timer.remaining, dispatch, timer.id, timer.name, timer.duration, timer.halfwayAlert, timer.category]);

  const progress = Math.floor(((timer.duration - timer.remaining) / timer.duration) * 100);

  return (
    <div>
      <strong>{timer.name}</strong> — {timer.remaining}s — {timer.status}
      <div style={{ background: '#eee', width: '100%', height: '10px' }}>
        <div style={{ width: `${progress}%`, background: 'green', height: '100%' }} />
      </div>
      <button onClick={() => dispatch({ type: 'UPDATE_TIMER', payload: { id: timer.id, updates: { status: 'Running' } } })}>Start</button>
      <button onClick={() => dispatch({ type: 'UPDATE_TIMER', payload: { id: timer.id, updates: { status: 'Paused' } } })}>Pause</button>
      <button onClick={() => dispatch({ type: 'RESET_TIMER', payload: { id: timer.id } })}>Reset</button>
    </div>
  );
}



























/*
// components/TimerItem.js
import React from 'react';
import ProgressBar from './ProgressBar';

const TimerItem = ({ timer, onStart, onPause, onReset, onComplete }) => {
  if(!timer) return null;
  return (
    <div>
      <h4>{timer.name}</h4>
      <p>Status: {timer.status}</p>
      <p>Time Left: {timer.remaining}s</p>
      <ProgressBar total={timer.duration} remaining={timer.remaining} />
      <button onClick={() => onStart(timer.id)}>Start</button>
      <button onClick={() => onPause(timer.id)}>Pause</button>
      <button onClick={() => onReset(timer.id)}>Reset</button>
      <button onClick={() => onComplete(timer.id)}>Complete</button>
    </div>
  );
};

export default TimerItem;*/