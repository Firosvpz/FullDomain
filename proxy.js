const target = {
    name:'hello',
    field:'world'
}

const handler = {}
const proxy = new Proxy(target,handler)
console.log(proxy.name);
console.log(proxy.field);


// proxy traps = get,set,deletePrperty,has,apply