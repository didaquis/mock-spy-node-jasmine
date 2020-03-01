const foo = () => {
    return true
}

const bar = (isTrue) => {
	if (isTrue) {
		return 'fake-data'
	}
	return 'fake-other-data'
}

module.exports = { foo, bar }