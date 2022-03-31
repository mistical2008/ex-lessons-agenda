import ReactDOM from 'react-dom'

import { worker } from 'mocks/server'

import App from 'app'

worker.start()

ReactDOM.render(<App />, document.getElementById('root'))
