const course = {
    coursename: "Wordpress Development",
    price: "20000",
    courseInstructor: "Muhammad Imran"
}
// course.courseInstructor
// we can change object key as we want
const {courseInstructor: instructor}= course
console.log(instructor);


// JSON Format
// {
//     "coursename": "Digital Marketing",
//     "instructor": "Imran",
//     "price": "15000"
// }
