class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    getSize() {
        return this.size
    }
    addFirst(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        if (this.head) {
            this.head.prev = newNode
        }
        this.head = newNode
        this.size++
    }
    addLast(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return
        }
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        newNode.prev = curr
        curr.next = newNode
        this.size++
    }
    addAt(index, value) {
        if (index < 0 || index > this.getSize()) {
            return null
        }
        if (index === 0) {
            return this.addFirst()
        }
        const newNode = new Node(value)
        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }
        newNode.prev = curr
        newNode.next = curr.next
        if (curr.next) {
            curr.next.prev = newNode
        }
        curr.next = newNode
        this.size++
    }
    reverse() {
        let curr = this.head;
        let temp = null;
        let newHead = null;

        while (curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            newHead = curr;
            curr = curr.prev;
        }

        this.head = newHead;
    }
    print() {
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
}


const list = new DoublyLinkedList()
list.addFirst(300)
list.addFirst(200)
list.addAt(1, 400)
list.addLast(500)
list.print()
console.log('reverse');
list.reverse()
list.print()
console.log('size:', list.getSize());