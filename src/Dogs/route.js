export default {
  path: '/dogs',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      let Dogs = require('./').default
      cb(null, Dogs)
    }, 'dogs')
  }
}
