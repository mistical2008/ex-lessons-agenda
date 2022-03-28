import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { worker } from 'mocks/server'

import App from 'app'

const client = new QueryClient()
worker.start()

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
