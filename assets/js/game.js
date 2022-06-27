// initialize robot
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// // initialize enemies
var enemyNames = ["Roborto", "Amy Android"];

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
        playerMoney = Math.max(10,playerMoney-10);
        console.log("playerMoney", playerMoney);
        break;
      } else {
        fight(enemyNames[i], enemyHealth, enemyAttack);
      }
    }
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    var damage = randomNum(playerAttack-3,playerAttack);
    enemyHealth = Math.max( enemyHealth - damage,0);
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
    damage = randomNum(enemyAttack-3,enemyAttack);
    playerHealth = Math.max(0, playerHealth -damage);

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

// function to start the game
var startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  window.alert("Welcome to Robot Gladiators!");
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Round " + (i + 1) + " begins...");
      var enemyHealth = randomNum(20,60);
      var enemyAttack = Math.floor(Math.random() * 20);;
      fight(enemyNames[i], enemyHealth, enemyAttack);
      if (i < enemyNames.length - 1 && playerHealth > 0) {
        var enterShop = window.confirm("Would you like to enter the shop?");
        // enter shop if they confirm
        if (enterShop) {
          shop();
        }
      }
    } else {
      window.alert(
        "Your robot has lost all of its health and died... better luck next time!"
      );
      break;
    }
  }
  endGame();
};

var shop = function () {
  var shopOption = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  console.log(playerMoney);
  switch (shopOption) {
    case "refill":
    case "REFILL":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth += 20;
        playerMoney -= 7;
      } else {
        window.alert("You don't have enough money to do that.");
      }

      break;
    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        playerAttack += 6;
        playerMoney -= 7;
      } else {
        window.alert("You don't have enough money to do that.");
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store");
      break;
    default:
      window.alert("You did not pick a valid option. Please try again.");
      shop();
      break;
  }
};

var randomNum = function (min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}
startGame();
