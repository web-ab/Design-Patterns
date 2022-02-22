class Observer {
    constructor() {
        this.observer = [];
    }

    subscribe(fn) {
        this.observer.push(fn);
    }

    unsubscribe(fn) {
        this.observer = this.observer.filter(f => f !== fn);
    }

    fire() {
        this.observer.forEach(observer => observer());
    }
}


function Observer1() {
    console.log('Observer 1 Fired!');
}

function Observer2() {
    console.log('Observer 2 Fired!');
}

const observer = new Observer();
observer.subscribe(Observer1);
observer.subscribe(Observer2);

// observer.unsubscrie(Observer1);

observer.fire();