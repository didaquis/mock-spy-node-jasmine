const utils = require('../src/destructured-imports/utils');

describe('myModule', () => {

	describe('bizz should return fake-data', () => {
		it('when foo returns true', () => {
			const fooSpy = spyOn(utils, 'foo').and.returnValue(true);
			const barSpy = spyOn(utils, 'bar').and.callFake(data => {
				expect(data).toBeTrue();
				return 'fake-data';
			});
	
			const { bizz } = require('../src/destructured-imports/myModule'); // Import myModule after you added the spyOn
	
			expect(bizz()).toBe('fake-data');
	
			expect(fooSpy).toHaveBeenCalled();
			expect(barSpy).toHaveBeenCalled();
		});
	});

	// El siguiente test falla porque no consigo rehacer el comportamiento del espía. Sin embargo, el test pasa correctamente si el primer test está desactivado. De algún modo debería restaurar el comportamiento de 'foo' y 'bar', pero no logro hacerlo
	// https://github.com/jasmine/jasmine/issues/1798 y https://stackoverflow.com/questions/60149391/how-to-use-jasmine-js-spy-on-a-required-function

	// describe('bizz should return fake-other-data', () => {
	// 	it('when foo returns false', () => {
	// 		const fooSpy = spyOn(utils, 'foo').and.returnValue(false);
	// 		const barSpy = spyOn(utils, 'bar').and.callFake(data => {
	// 			expect(data).toBeFalse();
	// 			return 'fake-other-data';
	// 		});

	// 		const { bizz } = require('../src/destructured-imports/myModule'); // Import myModule after you added the spyOn

	// 		expect(bizz()).toBe('fake-other-data');

	// 		expect(fooSpy).toHaveBeenCalled();
	// 		expect(barSpy).toHaveBeenCalled();
	// 	});
	// });

});
