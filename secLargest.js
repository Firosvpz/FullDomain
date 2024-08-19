function secondLargest(arr){
    let largest=-Infinity
    let seclargest=-Infinity
    for(let num of arr){
        if(num>largest){
            seclargest=largest
            largest=num
        }else if(num>seclargest && num<largest){
            seclargest=num
        }
    }return seclargest === -Infinity ? null : seclargest
}
const arr=[1,1,1,1,1]
const res=secondLargest(arr)
console.log(res);