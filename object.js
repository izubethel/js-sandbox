// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var user = {                                            // 1. Create an object that has properties "username" and "password". Fill those values in with strings.

    username: "john",
    password:"sapa123"
}
console.info(user);

var database = [                                        // 2. Create an array which contains the object you have made above and name the array "database".
    {
        username: "john",
        password:"sapa123"
    }
    
]

console.log(database)

var newsfeed = [                                // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
    {
    username: "john", 
    timeline: "sapa123"
    },

    {
        username: "wesley", 
        timeline: "edakun123"
    },

   {
    username: "cynthia", 
    timeline: "12345"
   }
       
]

console.log(newsfeed)