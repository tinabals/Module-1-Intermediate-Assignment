const multiply = (a,b) => {
   let result = a * b
   console.log(result)
}

multiply(3, 4);

/* In the same index.js file, create variables for your first name, last name, Stutern track, skills, favourite color, year of your country’s independence. Use these variables to form a sentence and log the sentence in the console. */

const firstName = "Damilola"
const lastName = "Balogun"
const stuternTrack = "1.4 Front-end Development"

const favouriteColour = "purple"
let skills = ['html', 'css', 'javascript', 'bootstrap', 'problem-solving', 'analytical thinking']
let countryIndependence = 1960


console.log(`HI!!! 
my name is ${firstName} ${lastName},my favourite color is ${favouriteColour}. I am in the ${stuternTrack}Track! and my skills are ${skills.join(', ')}. I'm a Nigerian and my country's independence was in the year ${countryIndependence}.
            `)