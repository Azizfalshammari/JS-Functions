let User = {
    
    name:'Abdulaziz',
    email:'Test@Testmail.com',
    ID: 2138219321,
    available: false,
    workCheck: function(available) {
        if (User.available == true) {
            console.log(this.name + ' Is available for work')
        } else {
            console.log(this.name + ' is unavailable for work')
        }
    },
    address: {
        city: {mainCity:'Jeddah',
                secCity: 'riyadh'
        },
        country: 'saudi',
        phone: '0555555555'
        
    },

    skills:  ['Teamwork',
         'Programming',
         'driving']
       
    
};
console.log('\n -------- Output ----------')

console.log('\n -------- PRINTING USER ----------')
console.log(User);
console.log('\n -------- CHECK WORK  ----------')
console.log(User.workCheck(User.available))
console.log('\n -------- PRINTING NAME  ----------')
console.log(User.name);
console.log('\n -------- PRINTING ADDRESS  ----------')
console.log(User.address);
console.log('\n -------- PRINTING MAIN CITY  ----------')
console.log(User.address.city.mainCity)
console.log('\n -------- PRINTING 3rd ITEM IN SKILLS  ----------')
console.log(User.skills[2]);



delete  User.email;
console.log(User)

User.ID= 555555
console.log(User.ID)


console.log(User.skills.join(","))

