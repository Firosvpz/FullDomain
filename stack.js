class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(!this.items){
            return 'stack underflow'
        }
        return this.items.pop()
    }
    peek(){
        if(!this.items){
            return 'stack underflow'
        }
        return this.items[this.items.length-1]
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}
const stk = new Stack()
stk.push(10)
stk.push(20)
stk.push(40)
stk.pop()
stk.print()
console.log(stk.peek());