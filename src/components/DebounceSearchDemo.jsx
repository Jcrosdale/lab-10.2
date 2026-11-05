// Imports
import { useState, useEffect } from 'react';
import { useDebounce } from "../hooks/useDebounce"

// As the user types into the input, use the useDebounce hook to get the debounced version of the input’s value.
// Display both the current input value and the debounced value.
// You can simulate an API call or filtering action whenever the debouncedValue changes by logging to the console (e.g., “Searching for: [debouncedValue]”).

export default function DebounceSearchDemo() {
    const [text, setText] = useState("")
    const [delay, setDelay] = useState(500);

    const debouncedText = useDebounce(text, delay);

    // You can simulate an API call or filtering action whenever the debouncedValue changes by logging to the console (e.g., “Searching for: [debouncedValue]”).
    useEffect(() => {
        if (debouncedText) {
            console.log("Searching for:", debouncedText);
        }
    }, [debouncedText]);

    return (
        <>
            <h1>Debounce Search Demo</h1>
            <p>Debounce Delay (ms): </p>
             Create a component with an input field.
            <input></input>

            <h2>Current Input:</h2>
            <p>Debounced Value (after ms):</p>

            <h2>Simulated Search Results:</h2>

        </>
    )
}