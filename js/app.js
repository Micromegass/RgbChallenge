

var correct = Math.floor(Math.random() * 2)

$('.option').on('click', function() {

    var index = ($('.option').index(this))

    if (index == correct) {

        alert('awesome!!');
    }
    else

      alert('moron');

});


$('.option').each(function(index) {
    var color = generateColor;
    $(this).css('background-color', color);

    if (index == correct) {
        $('.question').text(color);
    }
});


function generateColor() {
    return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'; 
}

function random() {
   return Math.floor(Math.random() * 255);
}


