const newarray = [1, 2, 3, 4, 5]
const newarray2 = [6, 7, 8]

// newarray.push(newarray2);

// Concate

// const allarray = newarray.concat(newarray2);
// console.log(allarray);
// Spread

const allarray = [...newarray, ...newarray2]
console.log(allarray);
// console.log(newarray[5][2]);

