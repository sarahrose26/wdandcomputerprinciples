//document.ready function ensures the HTML has loaded before any of the Jquery functions begin running

$(document).ready(function(){
     console.log("The document is ready.")         
// this function will fade the paragraph text in and out over 2 seconds (2000 miliseconds)    
//    $(".btn1").click(function(){
//        $("p").fadeOut(1000, function(){
//            console.log("The fadeOut method has finished.");
//    }); 
//});  
//    $(".btn2").click(function(){
//        $("p").fadeIn(1000, function(){
//            console.log("The fadeIn method has finished");
//        });                      
//    });  
    
//this function will slide the paragraph text up and down    
//    $(".btn1").click(function(){
//        $("p").slideUp();                       
//    });             
//    $(".btn2").click(function(){
//        $("p").slideDown();                       
//    }); 
    
    
//    $("p").click(function(){
//        $(this).hide();
//    });
//                
         
    //animate can add animation behavior to any element attached to a numeric CSS style
//   $("#animation").click(function(){
//       $("#greenbox").animate({left: '250px'})
//   });
    
    $("#greenbox").click(function(){
        $(this).animate({left: '250px'})
   });
    

                 
                 
                 
                 
});