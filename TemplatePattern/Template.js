// Abstract Class:
class Sandwich {
	constructor() {
		if (new.target === Sandwich) {
			throw new TypeError('Sorry this class is abstract and cannot be instantiated.');
		}
	}
	makeBread() {
		console.log('Making bread.');
		return this; // because we want to chain.
	}
	addSalad() {
		console.log('Adding salad.');
		return this; // because we want to chain.
	}
	addSauces() {
		console.log('Adding sauces.');
		return this; // because we want to chain.
	}

	make() {
		return this
			.makeBread()
			.addSalad()
			.addToppings() 
			.addSauces();
	}


	addToppings() {
		throw new Error('This method is abstract.');
	}
}

class TurkeySandwich extends Sandwich {
	
	addToppings() {
		console.log('Adding turkey.');
		return this; 
	}
}

class ChickenSandwich extends Sandwich {
	addToppings() {
		console.log('Adding chicken.');
		return this; 
	}
}


const turkeySandwich = new TurkeySandwich();
const chickenSandwich = new ChickenSandwich();

turkeySandwich.make();
chickenSandwich.make();