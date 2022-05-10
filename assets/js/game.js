var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    //if user starts a new fight
    if(promptFight === "fight" || promptFight === "FIGHT")
    {
        //enemys turn
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " +enemyName + " now has " + enemyHealth + " health.");

        //displays the results of the players attacking turn
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //players turn
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health.");

        //displays the results of the enemys attacking turn
        if (playerHealth <= 0){
            window.alert(enemyName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }

    //if the player skips the fight
    else if(promptFight === "skip" || promptFight === "SKIP"){
        window.alert(playerName + " has chosen to skip the fight!");

        var confirmSkip = window.confirm("Are you sure you would like to quit?");

        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight, Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }

    //if player selects no option displayed
    else{
        window.alert("Your need to choose a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}

//battle function of player vs robot


//fight();