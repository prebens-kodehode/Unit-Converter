/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const lengthOut = document.getElementById("length-out")
const volumeOut = document.getElementById("volume-out")
const massOut = document.getElementById("mass-out")

// button converts input field and outputs new values
convertBtn.addEventListener("click", function(){
    const inputValue = Number(inputNumber.value)
    
    // unit conversions
    const meters = Number((inputValue / 3.281).toFixed(3))
    const feet = Number((inputValue * 3.281).toFixed(3))
    const liters = Number((inputValue / 0.264).toFixed(3))
    const gallons = Number((inputValue * 0.264).toFixed(3))
    const kilos = Number((inputValue / 2.204).toFixed(3))
    const pounds = Number((inputValue * 2.204).toFixed(3))
    
    // text output
    lengthOut.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`
    
    volumeOut.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`
    
    massOut.textContent = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`
    
})