function reverse(str){
    let reverse = ''
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    return reverse
}

// const str = 'hello'
// rev = reverse(str)
// console.log(rev);

function palindrome(str){
    let left = 0
    let right = str.length-1
    while(left<right){
        if(str[left] !==str[right]){
            return false
        }
        right--
        left++
    }
    return true
}
const str = 'malayalam'
const rev = palindrome(str)
console.log(rev);