function recursiveName(str){
    if(str.length<1){
        return str
    }
    return recursiveName(str.substring(1))+str[0]
}

const str = 'Firos'
const rev = recursiveName(str)
console.log(rev);