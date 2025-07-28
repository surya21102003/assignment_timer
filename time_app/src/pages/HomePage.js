import React from 'react';
import TimerForm from '../components/TimerForm';
import CategorySection from '../components/CategorySection';

export default function HomePage({ state, dispatch }) {
  const categories = [...new Set(state.timers.map(t => t.category))];
  return (
    <div>
      <h1>Timers</h1>
      <TimerForm dispatch={dispatch} />
      {categories.map(cat => (
        <CategorySection
          key={cat}
          category={cat}
          timers={state.timers.filter(t => t.category === cat)}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}
