//grabbing the HTML by ID
var heading = document.getElementById('title');

var firstName = "Sarah"

//changing the text inside of an element
heading.innerText = "Enter " + firstName + "'s information"

//changed the entire HTML element with innerHTML
document.getElementById('main-section').innerHTML = "<h3>Hello Class</h3>"

//grabbed all of the elements of specific tag name
var paragraphs = document.getElementsByTagName('p')

//these are indexed like an array
console.log(paragraphs[0].innerText)

//using queryselector
//querySelector can refer to an id, a class, OR an element
//queryselector is going to grab the first thing associated with the query you input
console.log(document.querySelector('.dog-paragraph'))

function myFunction(){
    document.getElementById('demo').innerText = "Helllooooooo";
}

 

