function Student(name,age,stream){
    this.name=name;
    this.age=age;
    this.stream=stream;

    this.sayHi=function(){
        console.log("Hi I am ",this.name," from ",this.stream);
    }
};

let st1=new Student("Bikrant",21,"Science");
let st2=new Student("Raj",20,"Commerce");

console.log(st1);
console.log(st2);
st2.sayHi();

//Optional chaining

let user={};
console.log(user?.address?.street);

let user1={
    address:{
        street:"Road 18B",
        block:"Sector A"
    }};
console.log(user1?.address);
console.log(user1?.address?.street);


