const autoClicker = document.getElementById("autoClicker");
const buttonDoubleClick = document.getElementById("buttonDoubleClick")
const AddClicks = document.getElementById("addClicks")
const counter = document.getElementById("counter")
let numberOfClicks = 0
let AutoClickerCost = 100
let DoubleYourClicksCost = 100
let clickIncrease = 1
AddClicks.onclick = () => {
    console.log("Im being clicked and im working")
    numberOfClicks = numberOfClicks + clickIncrease
    counter.innerText = "Number of Vettels " + numberOfClicks;
}

buttonDoubleClick.onclick = () => {
    if (numberOfClicks >= DoubleYourClicksCost) {
        console.log("i have been bought")
        numberOfClicks = numberOfClicks - DoubleYourClicksCost
        clickIncrease ++
        counter.innerHTML = "Number of Vettels" + numberOfClicks
    }
}





