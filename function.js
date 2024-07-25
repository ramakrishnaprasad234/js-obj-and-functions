function toCelsius(f){
    return (5/9)*(f-32);
}
let value=toCelsius(77);
document.getElementById("demo").innerHTML = value;

let text = "Outside :" + typeof carName;
document.getElementById("undefind").innerHTML = text;

function myfunction(){
    let carName = "volvo";
    let text1 = "inside :" + typeof carName+" " + carName;
    document.getElementById("carname").innerHTML = text1;
}
myfunction();

const car = {type:"fiat",weight:500,cc:600};
document.getElementById("object").innerHTML = "The car name is "+ " " + car.type +" "+"and wight is" + " "+car.weight;

const person = {firstName:"rama",lastName:"krishna", fullName: function(){
    return this.firstName+" "+this.lastName;
}};
document.getElementById("name").innerHTML = person.fullName();

const person1 = {firstName : "ramakrishna",lastName :"prasad"};
delete person1.lastName;
document.getElementById("delte").innerHTML = person1.firstName+" "+person1.lastName;

const myobj = {firstName:"ramakrishna",cars:{
    car1:"bmw",car2:"ford"
}}

let p1 = "cars";
let p2 = "car1";
document.getElementById("cars").innerHTML = myobj.firstName+" "+"and car is"+" "+myobj[p1][p2];

const person2 = {name:"ramakrishna",age:27,country:"india"}

let text2 = "";
for (let x in person2){
    text2 += person2[x]+" ";
}
document.getElementById("person").innerHTML = text2;

function person3(first,age,last) {this.firstName=first,this.age=age,this.lastName=last};

const myfathername = new person3("niranjan",55,"babu");
myfathername.changeName = function(name){
    this.lastName = name;
}
myfathername.changeName("kumar");

document.getElementById("changename").innerHTML = "my father name is " + myfathername.lastName;