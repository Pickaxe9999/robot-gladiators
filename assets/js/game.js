var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //window.alert("Welcome to Robot Gladiators!"); remove


    while(enemyHealth > 0 && playerHealth > 0){
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
                    break;
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
                    break;
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
                playerMoney = playerMoney - 10;
                console.log("playerMoney is now " + playerMoney);
                break;
            }
            else {
                fight();
            }
        }

        //if player selects no option displayed
        else{
            window.alert("Your need to choose a valid option. Try again!");
        }
    }
};
var startGame = function() {
    //reset the player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++){
        if(playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);

            if(i < enemyNames.length && playerHealth > 0){

                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if(storeConfirm){
                    shop();
                }
            }
        }
        else{
            window.alert("You Have lost your robot in battle! Game Over!");
            break;
        }
        //plays again
    }
}

var endGame = function() {
    window.alert("The game has now ended, Let's see how you did!");
    //if player is still alive then the player wins
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle");
    }

    //ask the player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function(){
    //ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid optiion. Try again.");
            shop(); //call again to repeat the function
            break;
    }
    
}

//battle function of player vs robot
startGame();
endGame();

//fight();