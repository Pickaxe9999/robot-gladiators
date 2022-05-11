var fightOrSkip = function(){
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toLowerCase();
        if (promptFight === "" || promptFight === null){
            window.alert("You need to provide a valid answer! Please try again.");
            return fightOrSkip();
        }

        //if the player skips the fight
        if(promptFight === "skip"){
            window.alert(playerInfo.name + " has chosen to skip the fight!");

            var confirmSkip = window.confirm("Are you sure you would like to quit?");

            if (confirmSkip){
                window.alert(playerInfo.name + " has decided to skip this fight, Goodbye!");
                playerInfo.money = playerInfo.money - 10;
                console.log("playerInfo.money is now " + playerInfo.money);
                return true;
            }
                return false;
        }

}

var fight = function(enemy) {

    var isPlayersTurn = true;

    if(Math.random() > 0.5){
        isPlayersTurn = false;
    }

    while(enemy.health > 0 && playerInfo.health > 0){
        if (isPlayersTurn){
            //Conditionall Recursive Function call
            if(fightOrSkip()){
                break;
            }
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);


            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name + " attacked " + enemy.name + ". " +enemy.name + " now has " + enemy.health + " health.");

            if (enemy.health <= 0){
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            } 
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

        }else{
            //enemy attacks
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + ". " +playerInfo.name + " now has " + playerInfo.health + " health.");
            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                break;
            } 
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }

        isPlayersTurn = !isPlayersTurn;

    }
};

var startGame = function() {
    //reset the player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++){
        if(playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health =randomNumber(40,60);
            fight(pickedEnemyObj);

            if(i < enemyInfo.length && playerInfo.health > 0){

                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if(storeConfirm){
                    shop();
                }
            }
        }
        else{
            window.alert("You Have lost your robot in battle! Game Over!");
            console.log("You Have lost your robot in battle! Game Over!");
            break;
        }
        //plays again
    }
}

var endGame = function() {
    window.alert("The game has now ended, Let's see how you did!");
    //if player is still alive then the player wins
    if (playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?  Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );

    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch(shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid optiion. Try again.");
            shop(); //call again to repeat the function
            break;
    }
    
}

//randomness function of any # between 40 and 60
var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max-min +1)+min);
    return value;
}

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null){
        name = prompt("What is your robots name?")
    }

    console.log("Your robots name is " + name);
    return name;
}


//variables defined
playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100,
        this.money = 10,
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >= 7){
            this.health += 20;
            this.money -+7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if(this.money >= 7){
            this.attack += 6;
            this.money -+7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
}

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
]

//battle function of player vs robot
startGame();
endGame();

//fight();