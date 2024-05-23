// Define the shape of your Redux state
export interface RootState {
    counter: CounterState;
    // Add more slices of state here as needed
  }
  
  // Define the shape of the counter slice of state
  export interface CounterState {
    value: number;
    count: number;
    // Add more properties here if your counter state has additional fields
  }
  