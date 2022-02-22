class Shipping {
    request(zipStart, zipEnd, weight) {
        return '$50.00';
    }
}




class AdvancedShipping {
    login(credentials) {
        // ...
    }
    setStart(start) {
        // ...
    }
    setDestination(destination) {
        // ...
    }
    calculate(weight) {
        return "$80.00";
    }
}


class ShippingAdapter {
    constructor(credentials) {
        this.credentials = credentials;
        this.shiping = new AdvancedShipping();
        this.shiping.login(this.credentials)
    }

    request(zipStart, zipEnd, weight) {
        this.shiping.setStart(zipStart);
        this.shiping.setDestination(zipEnd);
        return this.shiping.calculate(weight);
    }
}



const shipping = new Shipping();
const credentials = { token: "asdasd" };
const adapter = new ShippingAdapter(credentials);



const oldCost = shipping.request("78712", "10012", "2kg");
console.log('Old Cost: ' + oldCost); // $50.00

const newCost = adapter.request("78712", "10012", "2kg");
console.log('New Cost: ' + newCost);