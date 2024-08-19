const sample = new Set()
sample.add(10)
sample.add(20)
sample.add(30)

for(let values of sample){
    console.log(values);
}

const sample2 = new Map()
sample2.set('name','abc')
sample2.set('age',23)

for(let values of sample2){
    console.log(values);
}