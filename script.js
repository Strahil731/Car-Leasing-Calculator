function showRangeValue() {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
}

function showSecondRangeValue() {
    let input = document.getElementById("mySecondRange");
    let showResult = document.getElementById("second_demo");
    showResult.innerHTML = input.value;

    input.oninput = function () {
        showResult.innerHTML = this.value;
    }
}

function showTotalCost() {
    const btn = document.getElementById("showResult");
    btn.addEventListener("click", (event) => {
        event.preventDefault();

        let carValue = document.getElementById("myRange").value;
        let downPayment = document.getElementById("mySecondRange").value;
        let monthChoice = document.getElementById("myChoice").value;

        let showTotalSum = document.getElementById("showTotal");
        let monthPrice = document.getElementById("monthPrice");

        let sum1 = Number(carValue);
        let sum2 = Number(downPayment);
        let numberMonth = Number(monthChoice);

        showTotalSum.innerHTML = (sum1 + (sum1 * sum2 / 100)).toFixed(2);
        monthPrice.innerHTML = ((sum1 + (sum1 * sum2 / 100)) / numberMonth).toFixed(2)
    });
}

showTotalCost();
showRangeValue();
showSecondRangeValue();