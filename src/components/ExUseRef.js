import React from 'react';
import { useState, useRef } from 'react';

export default function ExUseRef() {
    const [time, setTime] = useState(60);
    let timeId = useRef();
    const handleState = () => {
        timeId.current = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
        console.log("TimeId-->", timeId.current);
    }
    const handleStop = () => {
        console.log("Object TimeId: ", timeId);
        console.log("TimeId-->", timeId.current);
        clearInterval(timeId.current);
    }
    return (
        <div>
            <h2>React Hook - useRef</h2>
            <p>Time: {time}</p>
            <button onClick={handleState}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
