let user=new Object();
//OR
let student={
    name:'Bikrant',
    age:21
};
console.log(student);
console.log(student.name);
console.log(student['name']);
console.log(student.age);
console.log(student['age']);

//Adding a property
student.isMale=false;
console.log(student);

//Deleting a property
delete student.age;
console.log(student);

//in operator checks for properties
console.log("isMale" in student);
console.log("name" in user);

//Looping over an object
student.age=42
for(let key in student){
    console.log(student[key])
}

