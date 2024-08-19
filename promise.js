const checkAge = ((age)=>{
    return new Promise((resolve,reject)=>{
        if(age>=18){
            resolve('validate')
        }else{
            reject('not validate')
        }
    })
})

checkAge(10).then(()=>{
    console.log('success');
}).catch(()=>{
    console.log('rejected');
})
checkAge(20).then(()=>{
    console.log('success');
}).catch(()=>{
    console.log('rejected');
})

Promise.all([checkAge(10),checkAge(20)]).then((result)=>{
    console.log('result',result);
}).catch((error)=>{ 
    console.error(error);
})