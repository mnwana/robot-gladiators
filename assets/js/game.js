// initialize robot
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// // initialize enemies
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

// initiliaze fight
var fight = function (enemyName, enemyHealth, enemyAttack) {
  while (enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    //   initiate skipping fight
    if (promptFight == "skip" || promptFight == "SKIP") {
      var confirmSkip = window.confirm(
        "Are you sure you want to skp the fight? Enter 'yes' to skip."
      );
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney -= 10;
        console.log("playerMoney", playerMoney);
        break;
      } else {
        fight(enemyNames[i], enemyHealth, enemyAttack);
      }
    }
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth -= playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth -= enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      console.log(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// function to start the game
var startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  window.alert("Welcome to Robot Gladiators!");
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Round " + (i + 1) + " begins...");
      var enemyHealth = 50;
      var enemyAttack = 12;
      fight(enemyNames[i], enemyHealth, enemyAttack);
    } else {
      window.alert(
        "Your robot has lost all of its health and died... better luck next time!"
      );
      break;
    }
  }
  endGame();
};

var endGame = function () {
  // window.alert("The game has now ended, let's check out your stats playa!");
  // if the player is still alive
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You lost your robot in battle :( ");
  }

  var playAgain = window.confirm("Would you like to play again?");
  if (playAgain) {
    // restart game
    startGame();
  } else {
    window.alert("Thank you for playing, come back soon!");
  }
};
var shop = function () {};
startGame();
