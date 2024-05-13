// evento scroll...


 let navbar = document.querySelector (".navbar")


 window.addEventListener("scroll", ()=>{
    console.log(window.scrollY)
    if(window.scrollY > 0 ){
        navbar.classList.add("nav-scrolled")
    }  else {
        navbar.classList.remove("nav-scrolled")
    }
 })

 // conteggiatori 

 //variabile con queryselector

 let conteggiatori = document.querySelector (".counters")
 let counter1 = document.querySelector (".counters1")
 let counter2 = document.querySelector (".counters2")

 // setinterval -> una built in function, che ci permette di eseguire un
 // un blocco di codice ogni tot numeri di millisecondi.
 // scriviamo dunque setInterval seguito da parentesi tonde, a mò di funzione
 // poi c'è una call back = ()=>
 // poi delle parentesi graffe dove si specifica cosa si vuol far accadere
 // e poi dopo le parentesi graffe dove c'è "interval" il tempo di reazione

   // per fermare il set interval che è una funziona asincrona 
   //usare il "clearinterval"

 function increment(element,number) {
     let counter = 0
      let intervallo = setInterval(() => {
    if (counter < number){
        counter ++
        element.innerHTML = counter;
    } else {
        console.log("ciao");
        clearInterval(intervallo)
    }
}, 10); 
    
 }

 increment(conteggiatori,100)
 increment(counter1,200)
 increment(counter2,300)



 //INTERSECTION OBSERVER -> CLASSE 
// le classi sono invece composte da una serie di oggetti e di metodi.
// una classe ha sempre bisogno della keyword "new"

 const nome_costante_o_variabile = new IntersectionObserver ((entries) =>
  {})
//variabile 
  let nome_variabile = new IntersectionObserver ((entries) =>
  {})
 
 // per creare un oggetto basta creare una variabile con sostantivo objt seguita da parentesi graffe: 

 let objt = {} // all'interno delle parentesi graffe vi è l'oggetto. 

