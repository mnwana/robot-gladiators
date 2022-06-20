// initialize robot
var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// // initialize enemies
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// initiliaze fight
var fight = function (enemyName) {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );
  if (promptFight.toLowerCase == "fight".toLowerCase) {
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
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
  //   initiate skipping fight
  else if (promptFight.toLowerCase == "skip".toLowerCase) {
    var confirmSkip = window.confirm(
      "Are you sure you want to skp the fight? Enter 'yes' to skip."
    );
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight!");
      playerMoney -= 2;
    } else {
      fight();
    }
  }
  //   prompt for accurate input
  else {
    window.alert("You need to choose a valid option. Try again.");
  }
};

for(var i =0; i<enemyNames.length; i++) {
    fight(enemyNames[i]);
};
