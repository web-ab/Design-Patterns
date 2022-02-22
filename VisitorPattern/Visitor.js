class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    accept(visitor) {
        new visitor(this);
    }
}

const newvalue = new Employee('Amount', 40000);
console.log(newvalue.getSalary());

class ExtraSalaryVisitor {
    constructor(emp) {
        emp.setSalary(emp.getSalary() * 2);
    }
}

newvalue.accept(ExtraSalaryVisitor);
console.log(newvalue.getSalary());