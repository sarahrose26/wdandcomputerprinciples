//define a variable
var name = "Sarah"

//printing the variable to the console
console.log(name)

//creating an alert
alert("Hello World")

//defining an array
var firstArray = ["bert", "ernie", "big bird", "snuffie"]

//logging the first element on an array
console.log(firstArray[0])

var secondArray = ["kermit", "miss piggy", "gonzo", "swedish chef"]

console.log(secondArray)

//creating a multidimensional array
var thirdArray = [firstArray, secondArray]

console.log(thirdArray[0][1])

var num = 5

if (num<10){
    alert("The variable is less than 10.")
    
}else if(num===5){
    alert("The variable is 5")
    
}else{
    alert("The variable is " + num)
}

function someName(numberOne, numberTwo){
    return numberOne + numberTwo + 10;
}

alert(someName(3, 4))


function alertName(name){
    return alert(name);
}

alertName(12)


//create two arrays
//create one multi-dimensional array
//access one element from one of your two arrays by using console.log

//prints information to the console
//console.log(nameofarray[])

//js object 

var car = {
    make: 'Toyota',
    model: 'Prius', 
    color: 'grey'
};

console.log(car['make'])

//this also returns the make of the car
//console.log(car.make);




if (5>10) {
console.log("You'll never see this in the console because 5 is not greater than 10");
}else{
console.log("this one");
}







































//console.log(document.getElementById('username').value)
//
//var username = document.getElementById('username')
//
//var password = 1234
//
//if (username == password) {
//    console.log("password is correct")
//}










//var myFriend = ["Jake", "John", "Samantha", "Billy"]
//for(var i = 0; i<myFriend.length; i++){
//    console.log(myFriend[i] + ' is my friend')
//}

//var x = 1
//while(x < 10){
//    console.log("On number" + x)
//    x++;
//}


//var z = 3;
//
//function someF(){  
//    var z = 20;  
//console.log(z);
//}
//
//someF()
//console.log(z);

