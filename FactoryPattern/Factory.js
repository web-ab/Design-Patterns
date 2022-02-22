class Developer {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
}

class Tester {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
}

class EmployeeFactory {
	static create(name, type) {
		switch (type) {
			case 'Developer':
				return new Developer(name, type);
			case 'Tester':
				return new Tester(name, type);
		}
	}
}


const employees = [];

employees.push(EmployeeFactory.create('Amir', 'Tester'));
employees.push(EmployeeFactory.create('Sara', 'Developer'));

for (const employee of employees) {
	console.log(employee);
}