import { useState } from 'react'
import { Button, DatePicker, Space } from 'antd'
import { useQuery } from 'react-query'

import logo from './logo.svg'

import './index.css'

async function getTeachers() {
    return await fetch('/api/teachers').then((response) => response.json())
}

async function getTeacherById(id: string) {
    return await fetch(`/api/teachers/${id}`).then((response) =>
        response.json()
    )
}

function App() {
    const [count, setCount] = useState(0)
    const { isLoading, data } = useQuery(['teachers'], getTeachers, {
        retry: false,
    })
    const { isLoading: isTeacherLoading, data: teacher } = useQuery(
        ['teacher'],
        () => getTeacherById('pNsFnV5QRgbOoPLKXpNpi')
    )

    if (isLoading || isTeacherLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="App">
            <h1>Teachers</h1>
            <div style={{ textAlign: 'left' }}>
                <code>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </code>
            </div>
            <h1>Teacher by id: 'pNsFnV5QRgbOoPLKXp'</h1>
            <div style={{ textAlign: 'left' }}>
                <code>
                    <pre>{JSON.stringify(teacher, null, 2)}</pre>
                </code>
            </div>
            <Space direction="vertical" style={{ width: '100%' }}>
                <DatePicker status="error" style={{ width: '100%' }} />
                <DatePicker status="warning" style={{ width: '100%' }} />
                <DatePicker.RangePicker
                    status="error"
                    style={{ width: '100%' }}
                />
                <DatePicker.RangePicker
                    status="warning"
                    style={{ width: '100%' }}
                />
                <Button onClick={() => alert('clicked')}>loading</Button>
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
