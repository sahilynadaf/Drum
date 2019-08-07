for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        // animateOnKeyPress(buttoninnerHTML);
    
    });
}

document.addEventListener("keypress",function(event){
    var pressedkey=event.key
    makeSound(pressedkey.toUpperCase());
    animateOnKeyPress(pressedkey);
});

function makeSound(kkey){
    switch (kkey) {
        case "W":
            var tom1=new Audio("tom1.wav");
            tom1.play();
            break;
        
        case "A":
            var tom2=new Audio("tom2.wav");
            tom2.play();
            break;
        
        case "S":
            var tom3=new Audio("tom3.wav");
            tom3.play();
            break;
        
        case "D":
            var tom4=new Audio("tom4.wav");
            tom4.play();
            break;
         
        case "J":
            var kick=new Audio("kick.wav");
            kick.play();
            break;
        
        case "K":
            var snare=new Audio("snare.wav");
            snare.play();
            break;
        
        case "L":
            var crash=new Audio("crash.wav");
            crash.play();
            break;

        default:
            console.log("You Pressed Wrong Key:" + kkey);
            break;
    }
}

function animateOnKeyPress(k){

    document.querySelector("." + k.toLowerCase()).classList.add("drum1");
    setTimeout(function(){
        document.querySelector("." + k.toLowerCase()).classList.remove("drum1");
    },100);
    
}