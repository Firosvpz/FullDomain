function bubble(arr){
    let swapped
    do{
        swapped=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped = true
            }
        }
    }
    while(swapped)
    return arr    
}

const arr = [90,87,67,34,54]
const sort = bubble(arr)
console.log(sort);