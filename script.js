var database = [];

var firstUser = {
    username: "andre1ut",
    password: "parola"
};

database.push(firstUser);

var secondUser = {
    username: "alex",
    password: "masina"
};

database.push(secondUser);

var newsFeed = [
    {
        user: "Laur",
        timeline: "Azi am fost la munca"
    },
    {
        user: "Maria",
        timeline: "Azi am fost la mare!!!"
    },
    {
        user: "Marius",
        timeline: "Sunt ok"
    }
];

var usernamePrompt = prompt("Enter your username: ");
var passwordPrompt = prompt("Enter your password: ");

var check = undefined;

function checkUserPass() {
    for(let i=0;i<database.length;i++){
        if(usernamePrompt === database[i].username && passwordPrompt === database[i].password){
            check = true;
            console.log(newsFeed);
        }
    }

    if(check === undefined) alert("Wrong credentials! Try again");
}

checkUserPass();