let arr=[12,23,{a:22}]

        //  Shallow copy
let shallowcopy = [...arr]
shallowcopy[2].a=99

console.log(arr);
console.log(shallowcopy);

    //    Deep copy

let deepCopy = JSON.parse(JSON.stringify(arr))
deepCopy[2].a = 32

console.log(arr);
console.log(deepCopy);