// Comparison of two JSON with differnet key order


let obj1 = { name: "Person 1", age:5};
let obj2 = { age:5, name: "Person 1" };

let keys1 = Object.keys(obj1)
let keys2 = Object.keys(obj2)

let flag = true
if(keys1.length===keys2.length){
for(let e of keys1)
{
    if(obj1[e]!==obj2[e])
    {
        flag = false;
        break;
    }
}
}
else
flag = false

flag?console.log("Equal"):console.log("Not Equal")