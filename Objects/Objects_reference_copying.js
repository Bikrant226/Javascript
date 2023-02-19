let user={
    name:'Bikrant',
    age:21,
    roll:"A33K9388"
};

//Here admin stores reference to user
let admin=user;

admin.name="Rahul";
console.log(user.name);

//Cloning an object
let clone={};
for(let key in user){
    clone[key]=user[key];
}
clone.name="Sam";
clone.age=22;
clone.roll="A33K9403";
console.log(clone);

//Merging two or more objects using Object.assign()
let movie={
    name:"Pathaan",
    actor:"SRK"
};

let other={
    actress:"DP",
    director:"SA"
};

Object.assign(movie,other);
console.log(movie.director);

//Using this keyword
//The value of this is the object “before dot”, the one used to call the method

let person={
    name:"Bikrant",
    age:21,

    sayHi(){
        console.log("Hello from ",person.name);
        console.log("Hello from ",this.name); //does the same thing as above code
    }
}

person.sayHi();

