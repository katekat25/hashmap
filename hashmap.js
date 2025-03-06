class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
    }

    hash(key) {
        let hashCode = 0;

        let prime = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }
}