function fibunacci(n){
    if(n===0) return 0
    if(n===1) return 1
    let a=0,b=1,sum
    for(let i=2;i<=n;i++){
       sum=a+b
       a=b
       b=sum
    }
    return sum
   //  return fibunacci(n-1) + fibunacci(n-2)
   }
   
   let res=fibunacci(6)
   console.log(res);
   