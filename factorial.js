// function factorial(x){
//     let res=1
//     for(let i=2;i<=x;i++){
//         res=res*i
//     }
//     return res
// }

// console.log(factorial(5));

// function factorial(n){
//     if(n<=1){
//         return n
//     }
//     return n*factorial(n-1)
// }

// const fact = factorial(5)
// console.log(fact);

function countCharacters(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

const str = countCharacters('hello');
console.log(str); // { h: 1, e: 1, l: 2, o: 1 }
