// function doubleIt(num){
//     return num*2;

// }


// const doubleIt = function add(num){
//     return num*2;
// }
// const result = add(10,7);
// const result2 =  give4();
// console.log(result2);

const doubleIt =  num => num*3;
const add = (x , y) => x+y;
const give4 =  () => 4;

const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;

}

const result = doMath(10, 6);
console.log(result);


