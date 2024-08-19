const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const  age=2
        if(age>18){
            resolve('oneeeeeeeee')
        }else{
            reject(' one not eligiblee')
        }
    },2000)
})

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     const age=2
        if(age>18){
            resolve('twooooo')
        }else{
            reject('two not eligiblee')
        }
    },1000)
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const age=19
        if(age>18){
            resolve('threeeee')
        }else{
            reject('three not eligiblee')
        }
    },3000)
})

async function validate(){
    try {
      const result= await Promise.any([
        promiseOne,promiseTwo,promiseThree
      ])
      console.log(result);
      
    } catch (error) {
       console.log(error); 
    }
}

validate()