import App from './'
import Dogs from '../Dogs/route'

export default {
  path: '/',
  component: App,
  childRoutes: [
    Dogs
  ]
}
