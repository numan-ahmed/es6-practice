const ages = [12,13, 14, 15];
const ages2 = [ 15, 16, 17, 18];
const ages3 = [20, 22, 23, 33]
const allAges = ages.concat(ages2).concat(ages3);

const allAges2 =[ ...ages,...ages2, 100, ...ages3];

// console.log(allAges2);


const business = 600;
const minister = 450;
const sochib =  550;
const takaPoisa = [600,450,550]
// const maximum =  Math.max(business,minister,sochib);

const maximum = Math.max(...takaPoisa);

console.log(maximum);
