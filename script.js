function showRangeValue() {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
}

showRangeValue();

function showSecondRangeValue() {
    let input = document.getElementById("mySecondRange");
    let showResult = document.getElementById("second_demo");
    showResult.innerHTML = input.value;

    input.oninput = function () {
        showResult.innerHTML = this.value;
    }
}

showSecondRangeValue();