let arr=[23,21,34,32,65,67]
let largest = arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]<largest){
        largest=arr[i]
    }
}
console.log(largest);