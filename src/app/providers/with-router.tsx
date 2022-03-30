import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { PagePreloader } from 'shared/ui/PagePreloader'

function withRouter(component: () => React.ReactNode) {
    return () => (
        <BrowserRouter>
            <Suspense fallback={<PagePreloader />}>{component()}</Suspense>
        </BrowserRouter>
    )
}
export { withRouter }
