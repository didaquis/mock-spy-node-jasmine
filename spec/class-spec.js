/* Code to test: */
class Person {
	constructor(firstName, lastName) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	}
  
	get fullName() {
	  return `${this.firstName} ${this.lastName}`;
	}
}

// ====================================================

/* Tests: */
describe('Spy example of a class', () => {
	let person;

	beforeAll(function () {
		person = new Person('John', 'Doe');
		person.fullName; // => "John Doe"
	});	

	it('Should test real behavior', () => {
		// Installs our spy
		const spy = spyOnProperty(person, 'fullName').and.callThrough();

		// Here we expect 'John Doe', what the real method returns.
		expect(person.fullName).toBe('John Doe');

		// Still we can assert calls on spy
		expect(spy).toHaveBeenCalled();
	});

	it('Should test fake behavior', () => {
		const spy = spyOnProperty(person, 'fullName').and.callFake( () => {
			// Perform some operations needed for this specific test
			let someString = 'Fake';
			let someResult = 'result';
		  
			return someString + ' ' + someResult;
		  });
		  
		  expect(person.fullName).toBe('Fake result');
		  expect(spy).toHaveBeenCalled();
	});

});
