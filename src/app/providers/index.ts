import { flow } from 'fp-ts/function'

import { withRouter } from 'app/providers/with-router'

export const withProviders = flow(withRouter)
