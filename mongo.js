const mongoose = require('mongoose');
main()
    .then(()=>{
    console.log("connection successful")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const User = mongoose.model("User",userSchema); //to make collecctions in database
// const Employee = mongoose.model("Employee",userSchema);
// const user2 = new User({
//     name:"HELLO",
//     email:"hello@gmail.com",
//     age:20
// });
// user2.save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });
// User.insertMany([
//     {name:"A",email:"A@gmail.com",age:19},
//     {name:"B",email:"B@gmail.com",age:20},
//     {name:"C",email:"C@gmail.com",age:21}
// ]).then((res)=>{
//     console.log(res)
// });
// User.find({age: {$gt:20}})
// .then((res)=>{
//     console.log(res)
// });
// User.updateMany({age: 20},{age:25})
// .then((res)=>{
//     console.log(res)
// });
User.deleteOne({age:19})
.then((res)=>{
    console.log(res)
});