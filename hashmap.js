import { LinkedList } from "./linkedlist"

class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.map = [];
    }

    hash(key) {
        let hashCode = 0;

        let prime = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }

    set(key, value) {
        let hashCode = this.hash(key);

        if (map[hashCode] !== undefined && map[hashCode].key === key) {
            
        }
        map[hashCode] = {key, value};
        // if (hashCode in map) {
        //     Object.assign(key, value);
        // }
        // map[this.hash(key)] = value;
        //once you reach the load factor, grow the buckets to double their capacity
    }
}