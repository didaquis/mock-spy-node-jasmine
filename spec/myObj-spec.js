/* Code to test: */
let myObj = {
	save: function() {
		// ...
	},
	getQuantity: function() {
		return 5;
	},
	printUpperCaseText: function(textToPrint) {
		return textToPrint.toUpperCase();
	}
}

// ====================================================

/* Tests: */
describe("Spies: myObj save", () => {

	it('Should spy on "save" method', () => {
		let spy = spyOn(myObj, 'save');

		expect(myObj.save).toBeDefined(); // comprobamos que el método existe.

		myObj.save(); // llamamos al espía.
		expect(spy).toHaveBeenCalled(); // comprobamos que el método "save" ha sido llamado.
		expect(spy).toHaveBeenCalledTimes(1); // comprobamos el número de veces que llamamos al método "save".
	});

});


describe("Spies: myObj getQuantity", () => {

	it('Should spy on "getQuantity" method', () => {
		let spy = spyOn(myObj, 'getQuantity').and.returnValue(10); // establecemos que el método "getQuantity" devolverá 10.
		expect(myObj.getQuantity()).toEqual(10); // comprobamos que devuelve 10
	});

	it('Should spy on "getQuantity" fake', () => {
		let spy = spyOn(myObj, 'getQuantity').and.callFake( () => {
			//console.log('returning 20');
			return 20;
		}); // generamos una función falsa en vez de usar la función real.
		expect(myObj.getQuantity()).toEqual(20); // comprobamos que devuelve 20
	});

	it('Should spy on "getQuantity" call through', () => {
		let spy = spyOn(myObj, 'getQuantity').and.callThrough(); // esto nos permite llamar al método "real" en vez de al doble

		expect(myObj.getQuantity()).toEqual(5); // comprobamos que el método real devuelve 5
		expect(spy).toHaveBeenCalled(); // comprobamos que el método "getQuantity" del objeto real ha sido llamado.
	});

	it('Should spy on "getQuantity" throw', () => {
		let spy = spyOn(myObj, 'getQuantity').and.throwError( new Error('problem') );

		let quantity;
		try {
			quantity = myObj.getQuantity();
		} catch (error) {
			quantity = 'foo';
		}
		expect(quantity).toEqual('foo'); // comprobamos que se ha lanzado un error;
	});

});


describe("Spies: myObj printUpperCaseText", () => {

	it('Should be possible called "printUpperCaseText" method with 1 parameter', () => {
		let spy = spyOn(myObj, 'printUpperCaseText');

		myObj.printUpperCaseText('foo');
		expect(myObj.printUpperCaseText).toHaveBeenCalledWith('foo'); // comprobamos que podemos enviarle un argumento.
		// En realidad, este último test nos da un falso positivo, ya que en javaScript los métodos no fallan si se les envía parámetros de más o de menos.
	});

	it('Should spy on "printUpperCaseText" call through', () => {
		let spy = spyOn(myObj, 'printUpperCaseText').and.callThrough(); // esto nos permite llamar al método "real" en vez de al doble

		expect(myObj.printUpperCaseText('bar')).toEqual('BAR'); // comprobamos que el método real devuelve el valor correcto
		expect(spy).toHaveBeenCalled(); // comprobamos que el método "printUpperCaseText" del objeto real ha sido llamado.
	});

});
