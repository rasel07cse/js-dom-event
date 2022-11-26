console.log('This is separate js file.');

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const makeBlue = document.getElementById('makingBlue');
makeBlue.onclick = function blues() {
    document.body.style.backgroundColor = 'blue';
}

const purp = document.getElementById('makingPurple');
purp.onclick = purplecolor;
function purplecolor() {
    document.body.style.backgroundColor = 'purple';
}


document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenRod';
})