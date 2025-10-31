// const tinderUser = new object()
const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "Imran"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser ={
    email : "imran@gmail.com",
    fullname: {
        userfullname: {
        firstname : "Muhammad",
        lastname : "Imran"
        }
    }
}
// console.log(regularUser.fullname);
obj1 = {1: "a", 2: "b"}
obj2 = {3: "c", 4: "d"}
// obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


