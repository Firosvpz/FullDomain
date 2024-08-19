class Queue{
    constructor(){
        this.items =[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(!this.items){
            return 'underflow'
        }
        return this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const que = new Queue()
que.enqueue(10)
que.enqueue(10)
que.enqueue(10)
que.enqueue(10)
console.log(que.peek());
que.dequeue()
que.print()
console.log(que.getSize());