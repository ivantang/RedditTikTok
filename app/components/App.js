import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked button ${count} times`;
    })

    return (
        <div className="App">
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>Click Me</button>
        </div>
    );
}
