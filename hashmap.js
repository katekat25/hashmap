import { LinkedList } from "./linkedlist.js"

class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.map = [];
        this.numberOfKeys = 0;
    }

    #extract(property = null) {
        let array = [];
        for (const linkedList of this.map) {
            if (linkedList !== undefined) {
                for (let j = 0; j < linkedList.size; j++) {
                    array.push(property ? linkedList.at(j).value[property] : linkedList.at(j).value);
                }
            }
        }
        return array;
    }

    #resize() {
        this.capacity *= 2;
        let oldEntries = this.entries();
        this.map = [];
        this.numberOfKeys = 0;

        for (const { key, value } of oldEntries) {
            this.set(key, value);
        }
    }

    hash(key) {
        let hashCode = 0;

        let prime = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        let hashCode = this.hash(key);

        if (this.map[hashCode] === undefined) {
            this.map[hashCode] = new LinkedList();
        }

        let index = this.map[hashCode].find(key);
        if (index !== null) {
            let node = this.map[hashCode].at(index);
            node.value = { key, value };
        } else {
            this.map[hashCode].append({ key, value });
        }

        this.numberOfKeys++;

        //check load factor
        if ((this.numberOfKeys / this.capacity) > this.loadFactor) {
            this.#resize();
        }
    }

    get(key) {
        let hashCode = this.hash(key);
        let index = this.map[hashCode].find(key);
        if (index !== null) {
            let node = this.map[hashCode].at(index);
            return node.value;
        } else return null;
    }

    has(key) {
        let hashCode = this.hash(key);
        return this.map[hashCode]?.contains(key) ?? false;
    }

    remove(key) {
        if (this.has(key)) {
            let hashCode = this.hash(key);
            let index = this.map[hashCode].find(key);
            this.map[hashCode].removeAt(index);
            this.numberOfKeys--;
            return true;
        } else return false;
    }

    length() {
        return this.numberOfKeys;
    }

    clear() {
        this.map = [];
        this.length = 0;
    }

    keys() {
        return this.#extract("key")
    }

    values() {
        return this.#extract("value");
    }

    entries() {
        return this.#extract();
    }
}

export { HashMap }