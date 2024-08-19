function reverStr() {
    let reverse = ''
    let str = 'hello'
    for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}
const res=reverStr()
console.log(res);


// function reverse(str){
//     if(str.length<=1){
//       return str
//     }
//     return reverse(str.slice(1)).concat(str[0])
//   }
//   let res=reverse('str')
//   console.log(res);