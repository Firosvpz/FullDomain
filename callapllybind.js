function mark(sub1,sub2){
    console.log(`${this.name} get 100 marks in ${sub1} and 99 marks in ${sub2}`);
}

const obj={
    name:'Thomasutty'
}
const obj2={
    name:'parvathi'
}

const res=mark.bind(obj2,'physics','biology')
res()