// let arr =[12,34,56,78,90]
function* gen(){
    yield '1'
    yield  '2' 
    yield '33'
}


const generator = gen()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());