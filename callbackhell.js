// function hello(callback){
//     function callback(hy){
//         function hy(abc){
//             function abc(efg){
//                 console.log('hello world');
//             }
//         }

//     }
// }

function hello(){
    return new Promise((resolve)=>{
        function callback(){
            return new Promise((resolve)=>{
                function hy(){
                    return new Promise((resolve)=>{
                        function abc(){
                           console.log('hello world');
                           resolve()
                        }
                        abc()
                    })
                }
                hy()
            })
        }
        callback()
    })
}

hello() 