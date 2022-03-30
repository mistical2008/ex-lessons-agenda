import {} from 'antd'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./home'))

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export { Routing }
