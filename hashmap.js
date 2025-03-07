//WHERE I LEFT OFF:
//I was last working on getting entries() to implement correctly. I suspect the issue may be that LinkedList objects are not printing their contents correctly. This may just be a rabbit hole though, so feel free to test other methods. You've got this and you aren't stupid.

import { LinkedList } from "./linkedlist.js"

class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.map = [];
        this.length = 0;
    }

    hash(key) {
        let hashCode = 0;

        let prime = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
        //works
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

        this.length++;
        //works
        //once you reach the load factor, grow the buckets to double their capacity
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
        //does this work??
    }

    remove(key) {
        let hashCode = this.hash(key);
        let index = this.map[hashCode].find(key);
        if (index !== null) {
            let node = this.map[hashCode].at(index);
            return node.value;
        } else return null;
        this.length--;
    }

    length() {
        return this.length;
    }

    clear() {
        this.map = [];
        this.length = 0;
    }

    keys() {
        let array = [];
        for (let i = 0; i < this.length; i++) {
            array[i] = this.map[i].getHead.value;
        }
        return this.map;
        //???
    }

    // values() {

    // }

    entries() {
        let buckets = Object.entries(this.map);
        console.log(buckets);
        let keyValueArray = buckets.map((linkedList) => {
            return linkedList.toString();
        })
        return keyValueArray;
        //works i think
    }
}

export { HashMap }