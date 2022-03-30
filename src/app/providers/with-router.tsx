import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

function withRouter(component: () => React.ReactNode) {
    return () => (
        <BrowserRouter>
            <Suspense fallback="...loading">{component()}</Suspense>
        </BrowserRouter>
    )
}
export { withRouter }
