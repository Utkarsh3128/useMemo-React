# React useMemo Hook

This template provides a basic example of useMemo hook 

### ```useMemo``` Hook
The React ```useMemo``` Hook returns a memoized value.
The ```useMemo``` Hook only runs when one of its dependencies update.

### useMemo Hook vs useEffect Hook
The main difference between ```useMemo``` and ```useEffect``` hook is that ```useMemo``` returns a memoized value and ```useEffect``` returns a memoized function

## Code Explanation
This code is a React application that demonstrates the usage of the ```useMemo``` hooks. It also includes a simple function slowFunc that performs a time-consuming calculation.

**Memozied values:**
Two memoized values are declared using the useMemo hook. These memoized values are computed based on specific dependencies and are cached to avoid unnecessary re-computations.
- **result** is memoized and represents the result of a time-consuming calculation using the slowFunc function. It depends on the number state.
- **styleColors** is memoized and represents an object with background and color properties. The values of these properties depend on the dark state.

Overall, this code demonstrates a React application that updates and displays a number while allowing users to change the theme (light or dark). The slowFunc function appears to be a placeholder for demonstrating how useMemo can help avoid unnecessary re-computation of values based on changing dependencies. 
