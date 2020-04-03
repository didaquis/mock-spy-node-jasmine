const utils = require('../src/destructured-imports/utils');

const { bizz } = require('../src/destructured-imports/myModule');

describe('myModule', () => {

	describe('bizz should return fake-data', () => {
		it('when foo returns true', () => {
			const fooSpy = spyOn(utils, 'foo').and.returnValue(true);
			const barSpy = spyOn(utils, 'bar').and.callFake(data => {
				expect(data).toBeTrue();
				return 'fake-data';
			});

	
			expect(bizz()).toBe('fake-data');
	
			expect(fooSpy).toHaveBeenCalled();
			expect(barSpy).toHaveBeenCalled();
		});
	});

	describe('bizz should return fake-other-data', () => {
		it('when foo returns false', () => {
			const fooSpy = spyOn(utils, 'foo').and.returnValue(false);
			const barSpy = spyOn(utils, 'bar').and.callThrough();

			expect(bizz()).toBe('fake-other-data');

			expect(fooSpy).toHaveBeenCalled();
			expect(barSpy).toHaveBeenCalled();
		});
	});

});
