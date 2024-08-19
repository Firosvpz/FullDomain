console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
},1000);
process.nextTick(()=>{
    console.log('process');
})
setImmediate(() => {
    console.log('Immediate callback');
});

console.log('End');
