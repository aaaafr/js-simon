// Un alert() espone 5 numeri generati casualmente.
 var randomNumber = [];
 var counter;
 for(counter = 0; counter < 5; counter++){
    randomNumber.push(Math.floor(Math.random()*100));
    console.log(randomNumber);
 }

 alert(randomNumber);

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var domanda = [];
var timer = 30;
var intervallo = setInterval(function (){
     if(timer == 0){
         alert("ORA RICORDA");
         for(var i = 0; i<5; i++){
            domanda.push(Number(prompt("Ricorda i numeri e inseriscili")));
        }

         clearInterval(intervallo);
     }else {
         timer--;
     }
     document.getElementById("secondi").innerHTML = timer;

 }, 100);




// !!!!!!!!

// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.

    
   




