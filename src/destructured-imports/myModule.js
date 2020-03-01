const { foo, bar } = require('./utils');

const bizz = () => {
    let fooResult = foo()
    return bar(fooResult)
}

module.exports = { bizz }