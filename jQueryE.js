console.log("Let’s get ready to party with jQuery!")
// adding class "image-center"
$('img').addClass('image-center');

// removing last paragraph
$('p').eq(5).remove();

// random "h1" font-size 
let fontSizeRandom = Math.floor(Math.random() * 101);
$('h1').css('font-size', fontSizeRandom);

// adding "li" w/t text
$('ol').append('<li> Adopt Me </li>')

// changing background Color
$(".form-control").on('keyup blur change', function(){
let red = `${$('input').eq(0).val()}`;
let blue = `${$('input').eq(1).val()}`;
let green = `${$('input').eq(2).val()}`;

$("body").css({'background-color': `rgb(${red}, ${green}, ${blue})`});

});


// removing img
$('img').on('click', function(){
    $(this).remove()
});
