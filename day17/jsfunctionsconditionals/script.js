//create a conditional statement that can make a decision
//a comparison of two items
//a set of conditions that must be met

//if is the key word that opens our conditional
//else is the key word that closes our conditional and is for when no other conditions have been met

//conditional statements are true/false statements
//boolean



var num = 5

if (num < 10) {
    alert("Your number is less than 10.")
}else if (num === 5){
    alert("Your number is 5.")
}else{
    alert("Your number is greater than 10.")
}

//conditionals can also compare strings

var iceCream = ["strawberry", "coffee", "peanut butter", "milk"]
    
var cake = ["chocolate", "carrot", "red velvet", "cheesecake"]

if (iceCream === cake){
    alert("Ice cream and cake are the same thing!")
}else{
    alert("Ice cream and cake are very different.")
}
    
//comparison operators: 
//if two things are equal ===
//greater than >
//not equal to !=
//greater than or equal to >=
//less than or equal to <=
//or ||
//and &&



//setting up a function

//functions perform operations that can have any data passed through them

//use the keyword function and give the function a name

//parenthesis hold the arguments that will be passed through your function

function alertName(name1){
    return alert(name1)
}

//call the function

alertName("Sarah!")

//functions can take in multiple arguments

function addNumber(numberOne, numberTwo){
    return numberOne/numberTwo;
}

//call the function
console.log(addNumber(33, 34))

//math operations 
// add: +
//subtract: -
//multiply: *
//divide: /

//create a function that is a virtual door
//if the user goes through the tacos door, give them a message about delicious tacos
//if the user goes through the pizza door, give them a message about yummy pizza
//if the user goes through the noodles door, give them a message about awesome noodles

//would you like to go through the taco, pizza or noodles?

function foodDoor(doorName){
    if (doorName === "tacos"){
        console.log("delicious tacos are here!");
    }else if (doorName === "pizza"){
        console.log("yummy piiiiiizzzzaaaaaaaaaaa");
    }else if (doorName === "noodles"){
        console.log("you must have wanted noodles, right?");
    }else{
        console.log("I'm hungry.");
    }
}
//
////call the function
//
//foodDoor("pizza")
foodDoor("tacos")

//regular array

var iceCream = ["strawberry", "coffee", "peanut butter", "milk"]
    
var cake = ["chocolate", "carrot", "red velvet", "cheesecake"]

//console.log(iceCream)

//multidimensional array

var desserts = [iceCream, cake]

console.log(desserts)




