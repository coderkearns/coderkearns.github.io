import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className="text-3xl" >Cool</h1>
            <button onClick={() => setCount(c => c + 1)}>Count is {count}</button>
        </div>
    )
}

export default App
