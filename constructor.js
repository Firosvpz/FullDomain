function Person(){
    this.name ='george'
    this.age=52
    this.greet = function(){
        console.log('hello');
    }
}

const person = new Person()
person.greet()