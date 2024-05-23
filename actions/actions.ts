// Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
