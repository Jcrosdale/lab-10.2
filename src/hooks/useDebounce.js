// Create a hook to debounce a rapidly changing value.

// Imports
import { useState, useEffect } from 'react';

// Inputs
// value: The value to debounce (e.g., a search string from an input field).
// delay: The debounce delay in milliseconds (default to 500ms).

export default function useDebounce(value, delay = 500) {
    // Use useState to store the debouncedValue.
    const[debouncedValue, setDebouncedValue] = useState(value)

    // Use useEffect to set up a timer (setTimeout) whenever the input value or delay changes.
    useEffect(() => {
        // The effect should clear the timer (using clearTimeout) if value or delay changes before the timer fires (this is the core of debouncing).
        setTimeout(() => {
            // When the timer finally fires, update the debouncedValue state.
            setDebouncedValue(value);
        }, delay);
    }, [value, delay]);

    // Return Value
    // debouncedValue: The value after the debounce delay has passed without value changing.

    return debouncedValue;
}




