//Data Storage

//Variables

//Persona 1
let firstPersonaFirstName = "Maria";
let firstPersonaMiddleName = "Delos Santos";
let firstPersonaLastName = "Las Marias";
let firstPersonaFullName = (firstPersonaFirstName + firstPersonaMiddleName + firstPersonaLastName);
let rearrangedName = firstPersonaFullName.split(" ");
let firstPersonaAge = 25;
let firstPersonaAddress = "Upper Session Road, Baguio City, Benguet";
let formattedName = "Name: " +rearrangedName[2] + ", " + rearrangedName[0] + " " + rearrangedName[1] + ", Age: " + firstPersonaAge + ", Address: " + firstPersonaAddress;

//Persona 2

console.log(formattedName);