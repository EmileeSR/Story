// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');


// html content elements
let text = document.querySelector('.text');
let pizza = document.querySelector('h2');

// html images elements
let start = document.querySelector('.startSubway');
    
let choiceAimage = document.querySelector('.choiceAimage');
    choiceAimage.style.display ="none";
let choiceA1image = document.querySelector('.choiceA1image');
    choiceA1image.style.display ="none";
let choiceA2image = document.querySelector('.choiceA2image');
    choiceA2image.style.display ="none";
let choiceA3image = document.querySelector('.choiceA3image');
    choiceA3image.style.display ="none";
let choiceA4image = document.querySelector('.choiceA4image');
    choiceA4image.style.display ="none";
 let choiceA5image = document.querySelector('.choiceA5image');
    choiceA5image.style.display ="none";    
let choiceA6image = document.querySelector('.choiceA6image');
    choiceA6image.style.display ="none";  
let scared=document.querySelector('h3');
scared.style.display="none";
let sword=document.querySelector('h2');
sword.style.display="block";

headButton.addEventListener('click', function() {
text.innerHTML = "You start to walk through the woods and you hear a noise in the distance. Double click picture to Run OR seach the page to check it out ";
start.style.display = "none";
choiceAimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
sword.style.display="none";
scared.style.display="block";
});

choiceAimage.addEventListener('dblclick', function(){
    choiceAimage.style.display ="none";
    choiceA4image.style.display ="block";
    choiceA5image.style.display ="none";
    text.innerHTML = "You run all the way home and you're safe";
    choiceA1image.style.display ="none";
    sword.style.display="none";
scared.style.display="block";

});

scared.addEventListener("mouseenter", function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You check it out and its a bunny and then you continue on your rout and get home safe";
    choiceA2image.style.display ="none";
    choiceA6image.style.display ="block";
    sword.style.display="none";
scared.style.display="block";
});


exploreButton.addEventListener("click", function(){
    
text.innerHTML = "You spot something in the distance that's big and furry. Double click picture to check out the monster or search the page for weapon";
    start.style.display = "none";
    choiceA3image.style.display ="block";
    exploreButton.style.display="none";
    headButton.style.display="none";
    sword.style.display="block";
scared.style.display="none";

    });
    
    choiceA3image.addEventListener('dblclick', function(){
        choiceAimage.style.display ="none";
        choiceA3image.style.display ="none";
        text.innerHTML = "You go check out the monster and it makes eye contact with you and it comes towards you and kills you.";
        choiceA5image.style.display ="block";
        sword.style.display="block";
scared.style.display="none";
    });
    
    sword.addEventListener("mouseenter", function(){
        choiceAimage.style.display ="none";
        choiceA3image.style.display ="none";
        text.innerHTML = "The monster sees you and runs towards you but you used your weapon and knocked it out and you ran home.";
        choiceA2image.style.display ="block";
        sword.style.display="block";
scared.style.display="none";
    });
    