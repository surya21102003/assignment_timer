import React from 'react';

export default function HistoryPage({ history }) {
  return (
    <div>
      <h1>Timer History</h1>
      <ul>
        {history.map(entry => (
          <li key={entry.id}>
            {entry.name} — completed at {new Date(entry.completedAt).toLocaleString()} (Category: {entry.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
