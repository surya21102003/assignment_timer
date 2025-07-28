export const initialState = {
  timers: [],     // { id, name, duration, remaining, category, status, halfwayAlert }
  history: []     // { id, name, completedAt, category }
};


export function timersReducer(state, action) {
  switch (action.type) {
    case 'LOAD_STATE':
      return action.payload;
    case 'ADD_TIMER':
      return { ...state, timers: [...state.timers, action.payload] };
    case 'UPDATE_TIMER':
      return {
        ...state,
        timers: state.timers.map(t => t.id === action.payload.id ? { ...t, ...action.payload.updates } : t)
      };
    case 'COMPLETE_TIMER':
      return {
        timers: state.timers.map(t => t.id === action.payload.id ? { ...t, status: 'Completed', remaining: 0 } : t),
        history: [...state.history, { id: action.payload.id, name: action.payload.name, completedAt: action.payload.completedAt, category: action.payload.category }]
      };
    case 'RESET_TIMER':
      return {
        ...state,
        timers: state.timers.map(t =>
          t.id === action.payload.id ? { ...t, remaining: t.duration, status: 'Paused' } : t)
      };
    case 'BULK_UPDATE_CATEGORY':
      return {
        ...state,
        timers: state.timers.map(t =>
          t.category === action.payload.category
            ? { ...t, status: action.payload.status, remaining: action.payload.reset ? t.duration : t.remaining }
            : t)
      };
    default:
      return state;
  }
}
