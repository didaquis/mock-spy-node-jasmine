const foo = {
	get value() {},
	set value(val) {}
};
describe('Spy getters and setters', () => {

	it('Can spy on getters', () => {
		spyOnProperty(foo, 'value', 'get').and.returnValue(1); // testeamos una propiedad de tipo 'getter'
		expect(foo.value).toBe(1);
	});
	
	it('Can spy on setters', () => {
		let spy = spyOnProperty(foo, 'value', 'set'); // testeamos una propiedad de tipo 'setter'
		foo.value = true;
		expect(spy).toHaveBeenCalled();
	});

})
