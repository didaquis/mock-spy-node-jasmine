const utils = require('./utils');

const bizz = () => {
    let fooResult = utils.foo()
    return utils.bar(fooResult)
}

module.exports = { bizz }