function isPrime(n) {
    if (n <= 1) return false
    if (n <= 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false

    for (let i = 5; i * i < n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false
        }
    }
    return true

}

function sum(arr) {
    return arr.filter((num) => isPrime(num)).reduce((num1,num2)=>num1+num2)
}

let arr = [1, 2, 3, 5, 15, 16, 17, 19, 20]
let res = sum(arr)
console.log(res);