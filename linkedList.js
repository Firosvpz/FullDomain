class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
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
        this.head = newNode
        this.size++
    }
    addLast(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        }
        else{
            let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode  
        }
        this.size++
    }
    addAt(index, value) {
        if (index < 0 || index > this.size) {
            return null
        }
        if (!this.head) {
            return this.addFirst()
        }
        const newNode = new Node(value)
        let curr = this.head
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next
        }
        newNode.next = curr.next
        curr.next = newNode
        this.size++
    }
    removeTop() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
        this.size--
    }
    removeLast() {
        if (!this.head) {
            return
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
        this.size--
    }
    removeAt(index) {
        if (index < 0 || index > this.getSize()) {
            return null
        }
        if (!this.head) {
            return this.head = this.head.next
        }
        let curr = this.head
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next
        }
        if (curr.next) {
            curr.next = curr.next.next
        }
        this.size--
    }
    search(value){
        if(!this.head){
            return null
        }
        let curr=this.head
        let index=0
        while(curr){
            if(curr.data===value){
                return index
            }
            curr=curr.next
            index++
        }
        return false
    }
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    updateAt(index,newValue){
        if(index<0 || index>this.size){
            return null
        }
        let curr=this.head
        for(let i=0;i<index-1;i++){
            curr=curr.next
        }
        curr.data=newValue
    }
    updateValue(oldValue,newValue){
        if(!this.head){
            return null
        }
        let curr=this.head
        while(curr){
            if(curr.data === oldValue){
                curr.data=newValue
                return
            }
            curr=curr.next
        }
        return false
    }
    print() {
        let curr = this.head
        while (curr) {
            console.log(curr.data);
            curr = curr.next
        }
    }
}
const list = new LinkedList()
list.addLast(4)
list.addFirst(2)

list.addAt(2, 34)
list.addLast(4)
// console.log('size:', list.getSize());
list.print()
list.updateAt(2,50)
list.updateValue(34,33)
list.print()
// console.log('reverse');
// list.reverse()
// list.print()
