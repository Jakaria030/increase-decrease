const counterElement = document.getElementById("counter");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");

let counter = 0;

const updateCounter = (value) => {
    // plus button code
    counter = counter + value;
    counterElement.innerText = counter;

    if(counter >= 10){
        plusBtn.setAttribute("disabled", true);
    }else{
        plusBtn.removeAttribute("disabled", false);
    }

    // minuse button code
    if(counter <= 0){
        minusBtn.setAttribute("disabled", true);
    }else{
        minusBtn.removeAttribute("disabled", false);
    }
}

plusBtn.addEventListener("click", () => {
    updateCounter(1);
});

minusBtn.addEventListener("click", () => {
    updateCounter(-1);
});