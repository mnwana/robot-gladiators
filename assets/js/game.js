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

var main = function () {
  window.alert("Welcome to Robot Gladiators!");
  for (var i = 0; i < enemyNames.length; i++) {
    var enemyHealth = 50;
    var enemyAttack = 12;
    fight(enemyNames[i], enemyHealth, enemyAttack);
  }
};

main();
