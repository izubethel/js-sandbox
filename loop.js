// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username", "password" & "status". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".



//3. Accept username, password & status from the prompt and add it to the database array 

//4. Create a function called SignIn that accept two parameter - username, password. This function would check the database array to check for any matching entry. If username & password matches return 
Both the username and status, if not return "Sorry, wrong username and password" 


//5. Initialise your database array with five object of username, password and status. 

//6. Update your signIn function to use loop; running through the item in the database and return matching username and password.

var user = {
        username:"john",
        password:"john123",
        status:"male"
    }

var database= [
        { username:"jack",
        password:"jack123",
        status:"male"
        },

        { username:"mark",
        password:"mark123",
        status:"active"
        },

        { username:"ruth",
        password:"ruthy123",
        status:"female"    
        }

    ]

    database.push(
        {username:prompt("enter your username"),
         password:prompt("enter your pasword"),
         staus:prompt("enter your status") 
        });



//4. Create a function called SignIn that accept two parameter - username, password. This function would check the database array to check for any matching entry. If username & password matches return 
Both the username and staus, if not return "Sorry, wrong username and password" 

var username = prompt("What's your username?");
var password = prompt("What's your password?");
        function signIn(username, password) {
            var database= [{ username:"jack",
            password:"jack123",
            status:"male"
            },
    
            { username:"mark",
            password:"mark123",
            status:"male"
            }
        ]
            if (username===database[0].username &&
                password===database[0].password){
                alert("Access Granted!");
                return database[0].username + database[0].status;
            }
            else if(username===database[1].username &&
                password===database[1].password){
                alert("Access Granted!");
                return database[1].username + database[1].status;
            }else{
                alert("Sorry, wrong username and password");
            }
            
        }
        signIn(username, password);

//5. Initialise your database array with five object of username, password and status. 
        var database= [                             
            { username:"jack",
            password:"jack123",
            status:"male"
            },
    
            { username:"mark",
            password:"mark123",
            status:"male"
            },
    
            { username:"ruth",
            password:"ruthy123",
            status:"female"    
            },

            { username:"Damilola",
            password:"dami123",
            status:"female"    
            },

            { username:"Esther",
            password:"esty123",
            status:"female"    
            }
    
        ]




//6. Update your signIn function to use loop; running through the item in the database and return matching username and password.  
function signIn(username, password){ 
    var database= [                             
    { username:"jack",
    password:"jack123",
    status:"male"
    },

    { username:"mark",
    password:"mark123",
    status:"male"
    },

    { username:"ruth",
    password:"ruthy123",
    status:"female"    
    },

    { username:"Damilola",
    password:"dami123",
    status:"female"    
    },

    { username:"Esther",
    password:"esty123",
    status:"female"    
    }

]            
	for(var i=0; i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password){
			return database[i].username + database[i].password;
		}else{
			alert("Sorry, wrong username and password");
		}
	}  
};  
