// let User = {
    
//     name:'Abdulaziz',
//     email:'Test@Testmail.com',
//     ID: 2138219321,
//     available: true,
//     workCheck: function(available) {
//         if (User.available == true) {
//             console.log(this.name + ' Is available for work')
//         } else {
//             console.log(this.name + ' is unavailable for work')
//         }
//     },
//     address: {
//         city: {mainCity:'Jeddah',
//                 secCity: 'riyadh'
//         },
//         country: 'saudi',
//         phone: '0555555555'
        
//     },

//     skills:  ['Teamwork',
//          'Programming',
//          'driving']
       
    
// };
// console.log('\n -------- Output ----------')

// console.log('\n -------- PRINTING USER ----------')
// console.log(User);
// console.log('\n -------- CHECK WORK  ----------')
// console.log(User.workCheck(User.available))
// console.log('\n -------- PRINTING NAME  ----------')
// console.log(User.name);
// console.log('\n -------- PRINTING ADDRESS  ----------')
// console.log(User.address);
// console.log('\n -------- PRINTING MAIN CITY  ----------')
// console.log(User.address.city.mainCity)
// console.log('\n -------- PRINTING 3rd ITEM IN SKILLS  ----------')
// console.log(User.skills[2]);



// delete  User.email;
// console.log(User)

// User.ID= 555555
// console.log(User.ID)


// console.log(User.skills.join(","))



//------------------------------ lab 2 --------------------------------------


characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


  //-------------- lab 2 requirements ----------------

//   From the Array do the next questions :

// 1-Get first name that has blue eyes.

console.log('\n 1-Get first name that has blue eyes.')
let blueye = characters.find(character => character.eye_color === 'blue');

console.log(blueye);
// 2-Get first gender that is his mass is over 50
console.log('\n 2-Get first gender that is his mass is over 50')
let genderMassOver50 = characters.find(character => character.mass > 50);

console.log(genderMassOver50.gender);
// 3-Get characters with height less than 200
let shortCharacters = characters.filter(character => character.height <200)
console.log(shortCharacters);

// 4-Get all male characters

let malesOnly = characters.filter (character => character.gender === 'male')

console.log(malesOnly)

// 5-Get array of all names only

let characterNames = characters.map(character=> character.name)
console.log(characterNames)

// 6-Get array of all heights only
let characterHeights = characters.map(character=> character.height)
console.log(characterHeights)
// 7-Sort by mass (low to high)
let MassSort = characters.sort((a,b) => a.mass - b.mass);
console.log( MassSort )

// 8-Sort by height (high to low)
let HeightSort = characters.sort((a,b) =>  b.height - a.height);
console.log(HeightSort)



// 9-Does every character have mass more than 40?
let massOver40Checker = characters.every(character=> character.mass > 40)
console.log(massOver40Checker)
// 10-Is every character shorter than 200?
let heightBelow200Checker = characters.every(character=> character.height < 200)
console.log(heightBelow200Checker)
// 11-Is there at least one character with blue eyes?
let atLeastOneBlueEyeChecker = characters.some(character=> character.eye_color === 'blue')
console.log(atLeastOneBlueEyeChecker)
// 12-Is there at least one character taller than 210?
let atLeastOneTallerThan210Checker = characters.some(character=> character.height > 210)
console.log(atLeastOneTallerThan210Checker)