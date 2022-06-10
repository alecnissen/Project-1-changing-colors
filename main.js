// colors array
let colors = ['blue','black','orange','red','green','brown','purple'];

// get button
let button = document.getElementById('button');

// add event listener
button.addEventListener('click', function() {
    // randomizer
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    // get container
    let container = document.getElementById('container');

    container.style.background = randomColor; 
})
