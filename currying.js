function sum(num3){
    return function a(num1){
        return function b(num2){
            return num3+num1+num2
        }
    }
}

let res=sum(30)(10)(20)
console.log(res);
