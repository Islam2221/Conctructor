// Животные

class Animal {
	constructor (type, age, name) {
		this.type = type
		this.age = age
		this.name = name
	}
}

class Dog extends Animal {
	constructor (type, age, name, gav) {
		super(type, age, name)
		this.gav = gav
	}

	sayGav () {
		console.log(`${this.gav}`);
	}

}
console.log('', '', '', 'Gav');

class Cat extends Animal {
	constructor(type, age, name, jump) {
		super(type, age, name)
		this.jump = jump
	}
}
console.log('', '', '', 'Прыгаю')

class Tiger extends (Cat, Dog) {
	constructor(type, age, name, jump, gav, weight) {
		super(type, age, name, jump, gav)
		this.weight = weight
	}

	sayWeight() {
		console.log(`${this.weight}`)
	}
}

class Wolf extends (Cat, Dog) {
	constructor(type, age, name, jump, gav, weight) {
		super(type, age, name, jump, gav)
		this.weight = weight
	}

	sayWeight() {
		console.log(`${this.weight}`)
	}
}

// 

class Worker {
	constructor(name, surname, rate, days) {
		this.name = name
		this.surname = surname
		this.rate = rate
		this.days = days
	}
	getSalary() {
		console.log(`${this.rate * this.days}`)
	}
}

const worker = new Worker ('Islam', 'Kubanychbekov', 10, 31);
console.log(worker.name);
console.log(worker.surname)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary());

