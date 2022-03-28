import { useState } from 'react'
import { Button, DatePicker, Space } from 'antd'

import logo from './logo.svg'

import './index.css'
// eslint-disable-next-line
// import '~/antd/es/alert/style/index.js'

console.log(alert)

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Space direction="vertical" style={{ width: '100%' }}>
                <DatePicker status="error" style={{ width: '100%' }} />
                <DatePicker status="warning" style={{ width: '100%' }} />
                <DatePicker.RangePicker status="error" style={{ width: '100%' }} />
                <DatePicker.RangePicker status="warning" style={{ width: '100%' }} />
                <Button onClick={() => alert("clicked")}>loading</Button>
              </Space>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button
                        type="button"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
