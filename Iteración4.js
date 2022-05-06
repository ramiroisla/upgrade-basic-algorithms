// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const Avengers= ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(Avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
    Avengers.unshift("IRONMAN");
    console.log(Avengers);


// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
    const lengthAvengers = Avengers.push();
    alert(lengthAvengers);
// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array

    const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
    rickAndMortyCharacters.push("Morty", "Summer");
   
    console.log("summer"); 
// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
    
    console.log("Rick");
    rickAndMortyCharacters.pop()
    const finalCharacter= rickAndMortyCharacters.pop();
    console.log (finalCharacter);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters.splice(0,1)
   console.log(rickAndMortyCharacters);
