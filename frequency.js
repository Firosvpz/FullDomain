function frequency(arr){
    const result = {}
    for(let i=0;i<arr.length;i++){
        const items = arr[i]
        if(result[items]){
            result[items]+=1
        }
        else{
            result[items]=1
        }
    }
    return result
}

const arr =[10,10,10,20,20,30,40,40,50]
const count = frequency(arr)
console.log(count);