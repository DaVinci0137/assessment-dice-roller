const input = document.querySelector('#name');
const rollButton = document.querySelector('.roll-button');
const totalDiv = document.querySelector('#total-number');
const allRollsButton = document.querySelector('.all-rolls');
const ol = document.querySelector('ol');
const totalNumberSpan = document.querySelector('span');

let dieRolls = []

rollButton.addEventListener("click", function () {
    console.log("click");
    let rollNum = input.value
    let counter = 0
    let sumOfRolls = 0
    while (rollNum > counter) {
        counter += 1;
        let rollValue = Math.floor(Math.random() * 6) + 1
        dieRolls.push(rollValue);
        sumOfRolls += rollValue;
    }
    totalNumberSpan.innerHTML = sumOfRolls;
    console.log(sumOfRolls)
    console.log(dieRolls)
})

allRollsButton.addEventListener("click", function () {
    console.log("click");
    for (let counter = 0; counter < dieRolls.length; counter += 1) {
        let dieRoll = dieRolls[counter]
        const niceDiceString = '<li class="dice">' + dieRoll + "</li>";
        ol.innerHTML += niceDiceString;
    }
})

