// Un alert() espone 5 numeri generati casualmente.
 var randomNumber = [];
 while(randomNumber.length < 5) {
     var numeroCasuale = Math.ceil(Math.random()*20);
     if(!randomNumber.includes(numeroCasuale)) {
        randomNumber.push(numeroCasuale);
        }
}
console.log(randomNumber);

alert("Ricordati i seguenti numeri " + randomNumber);

setTimeout(function () {  
    var numeriIndovinati = [];
    for(var i = 0; i < 5; i++) {
        alert("ora ricorda");
        var domanda = Number(prompt("Inserisci i numeri"));
        if(randomNumber.includes(domanda)){
            numeriIndovinati.push(domanda)
      
        }
    }
    console.log(numeriIndovinati);
    alert("hai indovinato " + numeriIndovinati.length + "dei numeri che ti ho mostrato")
}, 30000)




// !!!!!!!!

// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.

    
   




