// Imports
import { useState, useEffect } from 'react';
import useDebounce from "../hooks/useDebounce"

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

    // Display both the current input value and the debounced value.

    return (
        <>
            <h1>Debounce Search Demo</h1>

            <label>
                Debounce Delay (ms):
                <input
                    type="number"
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                />
            </label>

            <input
                type="text"
                placeholder="Type to search..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <h2>Current Input:</h2>
            <p>{text}</p>


            {/* As the user types into the input, use the useDebounce hook to get the debounced version of the input’s value. */}
            <h2>Debounced Value (after {delay}ms):</h2>
            <p>{debouncedText}</p>

            <h2>Simulated Search Results:</h2>
            <p>{debouncedText ? `Results for '${debouncedText}'` : 'Type to see results.'}</p>

        </>
    )
}