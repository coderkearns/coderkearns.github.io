import { useState } from 'react'

import Button from '@/components/Button'
import Card from '@/components/Card'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className="text-5xl text-blue-700 font-bold mt-2 mb-2 text-center" >Cool</h1>
            <Button onClick={() => setCount(c => c + 1)}>Count is {count}</Button>
            <Card.WithImg src="https://via.placeholder.com/1000">
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">Card Title</h3>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adip. Lorem Ipsum</p>
                </div>
            </Card.WithImg>
            <Card.WithImg src="https://via.placeholder.com/1000">
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">Card Title</h3>
                    <p className="text-gray-700 text-base">Card Parameters</p>
                </div>
            </Card.WithImg>
        </div>
    )
}

export default App
