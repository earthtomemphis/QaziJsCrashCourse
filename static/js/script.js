// Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born... Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    console.log(ageInDayss);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Generate Cat
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex_cat_gen');
    image.src = "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif";
    div.appendChild(image);
}
