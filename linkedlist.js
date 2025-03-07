class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (this.head === null) return;
        if (this.head.nextNode === null) {
            this.head = null;
            this.size--;
            return;
        } 
        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
        this.tail = current;
        this.size--;
    }

    append(value) {
        let node = new Node(value);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            this.tail = node;
        }

        this.size++;
    }

    prepend(value) {
        let node = new Node(value);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }

        this.size++
    }

    contains(value) {
        for (let i = 0; i < this.size; i++) {
            if (this.at(i).value.key === value || this.at(i).value === value) {
                return true;
            }
        }
        return false;
    }

    find(value) {
        for (let i = 0; i < this.size; i++) {
            if (this.at(i).value.key === value || this.at(i).value === value) {
                return i;
            }
        }
        return null;
    }

    toString() {
        let string = "";
        for (let i = 0; i < this.size; i++) {
            string += " ( " + this.at(i).value.key + " : " + this.at(i).value.value + " ) ";
            if (this.at(i).nextNode !== null) {
                string += "->";
            } else {
                string += "-> null";
            }
        }
        return string;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            this.head = this.head.nextNode;
            if (this.size === 1) this.tail = null;
        } else {
            let previous = this.at(index - 1);
            previous.nextNode = previous.nextNode.nextNode;
            if (index === this.size - 1) this.tail = previous;
        }
        this.size--;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export { LinkedList }