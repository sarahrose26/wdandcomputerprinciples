//document.ready function ensures the HTML has loaded before any of the Jquery functions begin running

$(document).ready(function(){
     console.log("The document is ready.")         
// this function will fade the paragraph text in and out over 2 seconds (2000 miliseconds)    
//    $(".btn1").click(function(){
//        $("p").fadeOut(2000);                       
//    });             
//    $(".btn2").click(function(){
//        $("p").fadeIn(2000);                       
//    });  
    
//this function will slide the paragraph text up and down    
    $(".btn1").click(function(){
        $("slide").slideUp();                       
    });             
    $(".btn2").click(function(){
        $("p").slideDown();                       
    });   
                 
                 
                 
                 
                 
                 
});