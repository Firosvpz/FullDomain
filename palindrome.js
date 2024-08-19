function palindrome(str){
    for(let i=0;i<str.length/2;i++){
      if(str[i]!==str[str.length-1-i]){
        console.log('palindrome');
        return;
      }
    }
    console.log('palindrome');
}

palindrome('malayalam')

function palindrom(str){
  if(str.length<2){
    return true
  }
  let n=str.length
  if(str[0] !== str[n-1]){
    return false
  }

  return palindrom(str.slice(1,n-1))
}

let str = 'hopoh'
let res=palindrom(str)
console.log(res);

