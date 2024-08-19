let arr=[1,2,4,6,8]
let str=[1,2,3,5,7]

function duplicate(arr,str){
    let newArr=[]
  for(let i=0;i<arr.length;i++){
    let find=true
    for(let j=0;j<str.length;j++){
        if(arr[i] === str[j]){
            find=false
            break
        }
    }
    if(find){
        newArr.push(arr[i])
    }
  }
  for(let i=0;i<str.length;i++){
    let find=true
    for(let j=0;j<arr.length;j++){
        if(str[i]===arr[j]){
            find=false
            break
        }
    }if(find){
        newArr.push(str[i])
    }
  }
  return newArr
}

const res = duplicate(arr,str)
console.log(res);

// let arr=[1,2,4,6,8]
// let str=[1,2,3,5,7]

// function duplicate(arr,str){
//    const uniqueArr= arr.filter((nums)=> !str.includes(nums))
//    const uniqueStr = str.filter((nums)=> !arr.includes(nums))
//    const res = uniqueArr.concat(uniqueStr)
//    return res
// }

// const res = duplicate(arr,str)
// console.log(res);