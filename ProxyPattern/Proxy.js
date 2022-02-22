class CryptoCurrencyAPI {
    getValue(coin) {
        console.log('Calling External API...');
        switch (coin) {
            case 'Bitcoin':
                return '$8000';
            case 'Ethereum':
                return '$3000';
            case 'Doge':
                return '$5';
            case 'Dai':
                return '$1';
        }
    }
}


class CryptoCurrencyAPIProxy {
	constructor() {
		this.cache = {};
	}

	getValue(coin) {
		if (this.cache[coin]) {
			return this.cache[coin];
		}

		this.cache[coin] = new CryptoCurrencyAPI().getValue(coin);
		return this.cache[coin];
	}
}

const api = new CryptoCurrencyAPIProxy();

console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Doge'));
console.log(api.getValue('Doge'));
console.log(api.getValue('Dai'));
console.log(api.getValue('Dai'));