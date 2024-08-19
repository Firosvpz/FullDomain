function recursiveBinary(arr,target,left=0,right=arr.length){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2)
    if(arr[mid] === target){
        return mid
    }else if(arr[mid]<target){
        return recursiveBinary(arr,target,mid+1,right)
    }else{
        return recursiveBinary(arr,target,left,mid-1)
    }
}

const arr = [1,2,3,4,5,7]
const target = 4

const index = recursiveBinary(arr,target)

if(index !== -1){
   console.log(`value found ${target}`);
}else{
    console.log('not found');
}