let counter = 0;

const $counter = document.querySelector('.counter');
const $cake = document.querySelector('#cake');
const $crunch = document.querySelector('#crunch');

$crunch.addEventListener('click', addToCounter);
$cake.addEventListener('click', subtractFromCounter);

function addToCounter() {
    counter += 1;
    if (counter === 0) {
        $counter.style.color = 'antiquewhite';
    }
    if (counter > 0) {
        $counter.style.color = 'rgba(0, 128, 0, 0.8)';
    }
    $counter.innerHTML = counter;
    $counter.animate([{opacity: '0.2'}, {opacity: '1.0'}], {duration: 100, fill: 'forwards'})
}

function subtractFromCounter() {
    counter -= 1;
    console.log(counter)
    if (counter === 0) {
        $counter.style.color = 'antiquewhite';
    }
    if (counter < 0) {
        $counter.style.color = 'rgba(255, 0, 0, 0.8)';
    }
    $counter.innerHTML = counter;
    $counter.animate([{opacity: '0.2'}, {opacity: '1.0'}], {duration: 100, fill: 'forwards'})
}