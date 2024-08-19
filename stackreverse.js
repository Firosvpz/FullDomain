function reverse(str){
    let stack=[]
    let rev=''
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    while(stack.length){
       rev+=stack.pop()
    }
    return rev
 }
 let str='hello'
 let res=reverse(str)
 console.log(res);
 