const myarray = [0, 1, 2, 3, 4, 5]

// console.log(myarray[2]);

// myarray.push(6);
// myarray.push(7);
// myarray.pop();
// myarray.unshift(0);
// myarray.shift(0);
// console.log(myarray.includes(9));
// console.log(myarray.includes(4));
// console.log(myarray.indexOf(4));
// const newarray = myarray.join()
// console.log(myarray);
// console.log(newarray);
// console.log(typeof newarray);

// Slice And Splice

// Original array

console.log("A", myarray);

//Slice

const my1 = myarray.slice(1,3);
console.log("B", myarray);
console.log(my1);

// Splice

const my2= myarray.splice(1,3);
console.log("C", myarray);
console.log(my2);
