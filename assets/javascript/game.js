$(document).ready(function () {

    // Show player a random number at the start of the game, and returns a random integer between min (19) and max (120) 
    // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

    var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#number-match').text(random);

    // This sets the array for the four random Autobot values, the variables and printing the win/losses

    var generatedNumber = [];
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#number-wins').text(wins);
    $('#number-losses').text(losses);

    // To generate the four random numbers for the Autobots

    function fourRandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
            generatedNumber.push(num);
        }
    }

    fourRandomNumbers();

    // This is the click events for the four Autobots

    $('#optimus').on('click', function () {
        total = total + generatedNumber[0];

        // As the player clicks on an autobot, it will add a specific amount of points to the player's total score

        $('#number-user').text(total);
        if (total == random) {
            win();
        } else if (total > random) {
            lose();
        }
    })

    $('#bumblebee').on('click', function () {
        total = total + generatedNumber[1];

        // As the player clicks on an autobot, it will add a specific amount of points to the player's total score

        $('#number-user').text(total);
        if (total == random) {
            win();
        } else if (total > random) {
            lose();
        }
    })

    $('#ironhide').on('click', function () {
        total = total + generatedNumber[2];

        // As the player clicks on an autobot, it will add a specific amount of points to the player's total score

        $('#number-user').text(total);
        if (total == random) {
            win();
        } else if (total > random) {
            lose();
        }
    })

    $('#jazz').on('click', function () {
        total = total + generatedNumber[3];

        // As the player clicks on an autobot, it will add a specific amount of points to the player's total score

        $('#number-user').text(total);
        if (total == random) {
            win();
        } else if (total > random) {
            lose();
        }
    })

    function win() {
        alert("You're finished this time Megatron!");
        wins++;
        $('#number-wins').text(wins);
        reset();
    }

    function lose() {
        alert("It's over Autobots!");
        losses++;
        $('#number-losses').text(losses);
        reset();
    }

// When the game begins again, the reset will generate a new random number, create four new random numbers for the Autobots and reset the users score back to zero
// Allows the game to continue without having to refresh the page

    function reset() {
        random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $('#number-match').text(random);
        generatedNumber = [];
        fourRandomNumbers();
        total = 0;
        $('#number-user').text(total);
    }

});