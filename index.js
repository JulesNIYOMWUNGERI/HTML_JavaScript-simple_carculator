
function handleClear (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value = ""
}


function handleSeven (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 7
}


function handleEight (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 8
}



function handleNine (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 9
}



function handleDivision (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += '/'
}



function handleFour (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 4
}



function handleFive (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 5
}



function handleSix (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 6
}



function handleMultiply (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += "*"
}



function handleOne (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 1
}




function handleTwo (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 2
}



function handleThree (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 3
}


function handleMinus (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += "-"
}



function handleZero (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += 0
}



function handleDot (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += "."
}



function handleEqual (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    const result = eval(screen.value)
    screen.value = result
}



function handlePlus (e) {
    e.preventDefault();
    const screen = document.getElementById('screen');
    screen.value += "+"
}