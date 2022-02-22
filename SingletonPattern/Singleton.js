class Process {
    constructor(statue) {
        this.statue = statue;
    }
}


const Singleton = (function () {
    let instance;

    function createInstance() {
        return new Process('New Process');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };

})()


const processManager1 = Singleton.getInstance();
const processManager2 = Singleton.getInstance();

console.log(processManager1 === processManager2);