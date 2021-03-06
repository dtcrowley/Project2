$(document).ready(function() {
  // VARIABLE DECLARATION
  // ===================================================================

  // Creating an object to hold our characters.
  var characters = {
    "Venusaur": {
      pokename: "Venusaur",
      Type_1: "Grass",
      Type_2: "Poison",
      Total: 525,
      HP: 80,
      Attack: 42,
      Defense: 83,
      Special_atk: 100,
      Special_def: 100,
      Speed: 80,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0003.png"
      },
    "Charizard":{
      pokename: "Charizard",
      Type_1: "Fire",
      Type_2: "Flying",
      Total: 534,
      HP: 78,
      Attack: 44,
      Defense: 78,
      Special_atk: 109,
      Special_def: 85,
      Speed: 100,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0006.png"
      },
    "Blastoise": {
      id: 9,
      pokename: "Blastoise",
      Type_1: "Water",
      Type_2: "",
      Total: 530,
      HP: 79,
      Attack: 38,
      Defense: 100,
      Special_atk: 85,
      Special_def: 105,
      Speed: 78,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0009.png"
      },
    "Raichu": {
      id: 26,
      pokename: "Raichu",
      Type_1: "Electric",
      Type_2: "",
      Total: 485,
      HP: 60,
      Attack: 40,
      Defense: 55,
      Special_atk: 90,
      Special_def: 80,
      Speed: 110,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0026.png"
      },
    "Nidoqueen": {
      id: 31,
      pokename: "Nidoqueen",
      Type_1: "Poison",
      Type_2: "Ground",
      Total: 505,
      HP: 90,
      Attack: 42,
      Defense: 87,
      Special_atk: 75,
      Special_def: 85,
      Speed: 76,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0031.png"
      },
    "Dugtrio": {
      id: 51,
      pokename: "Dugtrio",
      Type_1: "Ground",
      Type_2: "",
      Total: 405,
      HP: 35,
      Attack: 55,
      Defense: 50,
      Special_atk: 50,
      Special_def: 70,
      Speed: 120,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0051.png"
      },
    "Alakazam": {
      id: 65,
      pokename: "Alakazam",
      Type_1: "Psychic",
      Type_2: "",
      Total: 500,
      HP: 55,
      Attack: 50,
      Defense: 45,
      Special_atk: 135,
      Special_def: 95,
      Speed: 120,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0065.png"
      },
    "Gengar": {
      id: 94,
      pokename: "Gengar",
      Type_1: "Ghost",
      Type_2: "Poison",
      Total: 500,
      HP: 90,
      Attack: 32,
      Defense: 60,
      Special_atk: 130,
      Special_def: 75,
      Speed: 110,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0094.png"
      },
    "Hitmonchan": {
      id: 107,
      pokename: "Hitmonchan",
      Type_1: "Fighting",
      Type_2: "",
      Total: 455,
      HP: 50,
      Attack: 55,
      Defense: 79,
      Special_atk: 35,
      Special_def: 110,
      Speed: 76,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0107.png"
      },
    "Aerodactyl": {
      id: 142,
      pokename: "Aerodactyl",
      Type_1: "Rock",
      Type_2: "Flying",
      Total: 515,
      HP: 85,
      Attack: 55,
      Defense: 65,
      Special_atk: 60,
      Special_def: 75,
      Speed: 130,
      Generation: 1,
      Legendary: false,
      imageUrl: "../images/0142.png"
      }
  };

  // Will be populated when the player selects a character.
  var attacker;
  // Populated with all the characters the player didn't select.
  var combatants = [];
  // Will be populated when the player chooses an opponent.
  var defender;  
  // Tracks number of defeated opponents.
  var killCount = 0;

  // FUNCTIONS
  // ===================================================================

  // This function will render a character card to the page.
  // The character rendered, the area they are rendered to, and their status is determined by the arguments passed in.
  var renderCharacter = function(character, renderArea) {
    // This block of code builds the character card, and renders it to the page.
    var charDiv = $("<div class='character' data-name='" + character.pokename + "'>");
    var charName = $("<div class='character-name'>").text(character.pokename + " - Type: " + character.Type_1);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    var charHealth = $("<div class='character-health'>").text("HP: " +character.HP);
  //   var charType = $("<div class='character-health'>").text(character.type_1);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
  };

  // this function will load all the characters into the character section to be selected
  var initializeGame = function() {
    // Loop through the characters object and call the renderCharacter function on each character to render their card.
    for (var key in characters) {
      renderCharacter(characters[key], "#characters-section");
    }
  };

  // remember to run the function here
  initializeGame();

  // This function handles updating the selected player or the current defender. If there is no selected player/defender this
  // function will also place the character based on the areaRender chosen (e.g. #selected-character or #defender)
  var updateCharacter = function(charObj, areaRender) {
    // First we empty the area so that we can re-render the new object
    $(areaRender).empty();
    renderCharacter(charObj, areaRender);
  };

  // This function will render the available-to-attack enemies. This should be run once after a character has been selected
  var renderEnemies = function(enemyArr) {
    for (var i = 0; i < enemyArr.length; i++) {
      renderCharacter(enemyArr[i], "#available-to-attack-section");
    }
  };

  // Function to handle rendering game messages.
  var renderMessage = function(message) {
    // Builds the message and appends it to the page.
    var gameMessageSet = $("#game-message");
    var newMessage = $("<div>").text(message);
    gameMessageSet.append(newMessage);
  };

  // Function which handles restarting the game after victory or defeat.
  var restartGame = function(resultMessage) {
    // When the 'Restart' button is clicked, reload the page.
    var restart = $("<button class='restart-button'>Restart</button>").click(function() {
      location.reload();
    });

    // Build div that will display the victory/defeat message.
    var gameState = $("<div class=resultMessage>").text(resultMessage);

    // Render the restart button and victory/defeat message to the page.
    $("body").append(gameState);
    $("body").append(restart);
  };

  // Function to clear the game message section
  var clearMessage = function() {
    var gameMessage = $("#game-message");

    gameMessage.text("");
  };

  // ===================================================================

  // On click event for selecting our character.
  $("#characters-section").on("click", ".character", function() {
    // Saving the clicked character's name.
    var name = $(this).attr("data-name");

    // If a player character has not yet been chosen...
    if (!attacker) {
      // We populate attacker with the selected character's information.
      attacker = characters[name];
      // We then loop through the remaining characters and push them to the combatants array.
      for (var key in characters) {
        if (key !== name) {
          combatants.push(characters[key]);
        }
      }

      // Hide the character select div.
      $("#characters-section").hide();

      // Then render our selected character and our combatants.
      updateCharacter(attacker, "#selected-character");
      renderEnemies(combatants);
    }
  });

  // Creates an on click event for each enemy.
  $("#available-to-attack-section").on("click", ".character", function() {
    // Saving the opponent's name.
    var name = $(this).attr("data-name");

    // If there is no defender, the clicked enemy will become the defender.
    if ($("#defender").children().length === 0) {
      defender = characters[name];
      updateCharacter(defender, "#defender");

      // remove element as it will now be a new defender
      $(this).remove();
      clearMessage();
    }
  });

  // When you click the attack button, run the following game logic...
  $("#attack-button").on("click", function() {
    // If there is a defender, combat will occur.
    if ($("#defender").children().length !== 0) {
      // Creates messages for our attack and our opponents counter attack.
      var attackMessage = "You attacked " + defender.pokename + " for " + attacker.Attack + " damage.";
      var counterAttackMessage = defender.pokename + " attacked you back for " + defender.Attack + " damage.";
      clearMessage();

      // Reduce defender's health by your attack value.
      defender.HP -= attacker.Attack;

      // If the enemy still has health..
      if (defender.HP > 0) {
        // Render the enemy's updated character card.
        updateCharacter(defender, "#defender");

        // Render the combat messages.
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        // Reduce your health by the opponent's attack value.
        attacker.HP -= defender.Attack;

        // Render the player's updated character card.
        updateCharacter(attacker, "#selected-character");

        // If you have less than zero health the game ends.
        // We call the restartGame function to allow the user to restart the game and play again.
        if (attacker.HP <= 0) {
          var attackMessage = "You attacked " + defender.pokename + " for " + attacker.Attack + " damage.";
          var counterAttackMessage = defender.pokename + " attacked you back for " + defender.Attack + " damage.";
          $("#attack-button").hide();
          var restartMessage = "You have been defeated... GAME OVER!!!"
          renderMessage(restartMessage);
          restartGame();
          
        }
      }
      else {
        // If the enemy has less than zero health they are defeated.
        // Remove your opponent's character card.
          var attackMessage = "You attacked " + defender.pokename + " for " + attacker.Attack + " damage.";
          var counterAttackMessage = defender.pokename + " attacked you back for " + defender.Attack + " damage.";
          var gameStateMessage = "Enemy " + defender.pokename + " fainted! Choose your next opponent."; 
          renderMessage(attackMessage);
          renderMessage(gameStateMessage);
        
          $("#defender").empty();

        // Increment your kill count.
          killCount++;

        // If you have killed all of your opponents you win.
        // Call the restartGame function to allow the user to restart the game and play again.
        if (killCount >= combatants.length) {
          clearMessage();
          $("#attack-button").off("click");
          restartGame("You Won!!!! GAME OVER!!!");
        }
      }
      // Increment turn counter. This is used for determining how much damage the player does.
    }
    else {
      // If there is no defender, render an error message.
      clearMessage();
      renderMessage("No enemy here.");
    }
  });
});
