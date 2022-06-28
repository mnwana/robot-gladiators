// initialize player robot

var getPlayerName = function () {
  var playerName = window.prompt("What's your robot's name?");
  var invalidValues = ["", null, " ", "  "];
  while (invalidValues.includes(playerName)) {
    playerName = window.prompt(
      "Robot name cannot be empty... What's your robot's name?"
    );
  }
  return playerName;
};

var randomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var fightOrSkip = function () {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window
    .prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    )
    .toLowerCase();

  // Conditional Recursive Function Call
  if (!promptFight) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name + " has decided to skip this fight. Goodbye!"
      );
      // subtract money from playerMoney for skipping but stop it from going negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      return true;
    }
  }
  return false;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  upgradeAttack: function () {
    if (playerInfo.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money to do that.");
    }
  },
  refillHealth: function () {
    if (playerInfo.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money to do that.");
    }
  },
};

// // initialize enemies
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNum(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNum(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNum(10, 14),
  },
];

// initiliaze fight
var fight = function (pickedEnemyObject) {
  while (pickedEnemyObject.health > 0 && playerInfo.health > 0) {
    // ask player if they want to fight or skip
    if(fightOrSkip()){
      break;
    }
    //Subtract the value of `playerInfo.attack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    var damage = randomNum(playerInfo.attack - 3, playerInfo.attack);
    pickedEnemyObject.health = Math.max(pickedEnemyObject.health - damage, 0);
    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerInfo.name +
        " attacked " +
        pickedEnemyObject.name +
        ". " +
        pickedEnemyObject.name +
        " now has " +
        pickedEnemyObject.health +
        " health remaining."
    );

    // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    damage = randomNum(pickedEnemyObject.attack - 3, pickedEnemyObject.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    // Log a resulting message to the console so we know that it worked.
    console.log(
      pickedEnemyObject.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    // check enemy's health
    if (pickedEnemyObject.health <= 0) {
      window.alert(pickedEnemyObject.name + " has died!");
    } else {
      window.alert(
        pickedEnemyObject.name +
          " still has " +
          pickedEnemyObject.health +
          " health left."
      );
    }

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      console.log(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

var endGame = function () {
  // window.alert("The game has now ended, let's check out your stats playa!");
  // if the player is still alive
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
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
  playerInfo.reset;
  window.alert("Welcome to Robot Gladiators!");
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Round " + (i + 1) + " begins...");
      var pickedEnemyObject = enemyInfo[i];
      pickedEnemyObject.health = randomNum(20, 60);
      fight(pickedEnemyObject);
      if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
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
  console.log(playerInfo.money);
  switch (shopOption) {
    case "refill":
    case "REFILL":
      playerInfo.refillHealth;

      break;
    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack;
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

startGame();
