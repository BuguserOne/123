/* Lev1_1_forms+js_function-double */

const number = document.getElementById("number")
const result = document.getElementById("result")
function double() {
    const invoice = number.value * 2
    result.innerHTML = invoice
}

/* Lev1_2_forms+js_function-your-age */

const year = document.getElementById("year")
const result2 = document.getElementById("result2")
const button = document.getElementById('button')
button.addEventListener('click', getAge)
function getAge() {
    const ageYear = 2023 - year.value
    resultOne.innerHTML = ageYear
}

/* Lev1_3_forms+js_function-compare-age */

const ageOne = document.getElementById("ageOne")
const ageTwo = document.getElementById("ageTwo")
const difference = document.getElementById("difference")
const buttonTwo = document.getElementById("buttonTwo")
buttonTwo.addEventListener('click', getDifferenz)
function getDifferenz () {
    const resultTwo = ageOne.value - ageTwo.value
    difference.innerHTML = resultTwo
}

/* Lev1_3_projekt_js-einführung_counter */

const plusOne = document.getElementById("plusOne")
const minusOne = document.getElementById("minusOne")
const plusTen = document.getElementById("plusTen")
const minusTen = document.getElementById("minusTen")
const plusHundred = document.getElementById("plusHundred")
const minusHundred = document.getElementById("minusHundred")
const reset = document.getElementById("reset")
const twoTimes = document.getElementById("twoTimes")
const nextResult = document.getElementById("nextResult")
let currentNumber = 0;

plusOne.addEventListener("click", () => {
    currentNumber += 1
    nextResult.innerHTML = currentNumber
})
minusOne.addEventListener("click", () => {
    currentNumber -= 1
    nextResult.innerHTML = currentNumber
})
plusTen.addEventListener("click", () => {
    currentNumber += 10
    nextResult.innerHTML = currentNumber;
})
minusTen.addEventListener("click", () => {
    currentNumber -= 10
    nextResult.innerHTML = currentNumber
})
plusHundred.addEventListener("click", () => {
    currentNumber += 100
    nextResult.innerHTML = currentNumber
})
minusHundred.addEventListener("click", () => {
    currentNumber -= 100
    nextResult.innerHTML = currentNumber
})
reset.addEventListener("click", () => {
    currentNumber = 0
    nextResult.innerHTML = currentNumber
})
twoTimes.addEventListener("click", () => {
    currentNumber = currentNumber*2
    nextResult.innerHTML = currentNumber
})

/* Lev2_1_js-einführung_classList-onclick */

let headline = document.getElementById("headline")
let redButton = document.getElementById("redButton")
let blackButton = document.getElementById("blackButton")
let greenButton = document.getElementById("greenButton")

redButton.addEventListener("click", function() {
headline.classList.remove("optionBlack", "optionGreen")
headline.classList.add("optionRed")
})
blackButton.addEventListener("click", function() {
headline.classList.remove("optionRed", "optionGreen")
headline.classList.add("optionBlack")
})
greenButton.addEventListener("click", function() {
headline.classList.remove("optionRed", "optionBlack")
headline.classList.add("optionGreen")
})