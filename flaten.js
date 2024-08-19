let arr = [[1, 3], [7, [5, 3]], [4, 3, 2]]

function flattenArray(arr){
    let newArr=[]
   for(let i=0;i<arr.length;i++){
       if(Array.isArray(arr[i])){
         newArr=newArr.concat(flattenArray(arr[i]))
       }else{
        newArr.push(arr[i])
       }
   }
   return newArr    
}

let res= flattenArray(arr)
console.log(res);