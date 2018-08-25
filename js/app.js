
var correct;
var score = 0;

//initialize game
game();
//click for circles
$('.option').on('click', guess);

function game() {
    correct = Math.floor(Math.random() * 2);

    $('.option').each(function(index) {
        var color = generateColor();
        $(this).css('background-color', color);

        if (index == correct) {
            $('.question').text(color);
        }
    });
}

function guess() {
    var index = $('.option').index(this);
        if (index == correct) {
            alert('awesome!!');
            score++;
           $('.score span').text(score); //adding to score if correct

        } else {
            alert('moron');
            score = 0; 
            $('.score span').text(score); //setting score to 0


    }
        game();
}



function generateColor() {
    return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'; 
}

function random() {
   return Math.floor(Math.random() * 255);
}


