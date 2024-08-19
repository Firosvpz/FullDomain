function selection(){
    let arr = [45,36,12,23,35]
    let n = arr.length

    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}

const sort = selection()
console.log(sort);  