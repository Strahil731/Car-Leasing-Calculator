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

        let myCar = document.getElementById("myCar").value;
        let carPrice = document.getElementById("myRange").value;
        let percentPrice = document.getElementById("mySecondRange").value;
        let monthChoice = document.getElementById("monthChoice").value;

        let showPayment = document.getElementById("showPayment");
        let showTotal = document.getElementById("showTotal");
        let firstPrice = document.getElementById("firstPrice");
        let monthPrice = document.getElementById("monthPrice");


        let convertPriceToNumber = Number(carPrice);
        let convertPercentToNumber = Number(percentPrice);
        let convertMonthToNumber = Number(monthChoice);

        switch (myCar) {
            case "audi":
                showPayment.innerHTML = "2.90%";
                showTotal.innerHTML = `€${(convertPriceToNumber + (convertPriceToNumber * 2.90) / 100).toFixed(2)}`;
                monthPrice.innerHTML = `€${((convertPriceToNumber + (convertPriceToNumber * 2.90) / 100) / convertMonthToNumber).toFixed(2)}`;
                break;

            case "vw":
                showPayment.innerHTML = "1.98%";
                showTotal.innerHTML = `€${(convertPriceToNumber + (convertPriceToNumber * 1.98) / 100).toFixed(2)}`;
                monthPrice.innerHTML = `€${((convertPriceToNumber + (convertPriceToNumber * 1.98) / 100) / convertMonthToNumber).toFixed(2)}`;
                break;

            case "bmw":
                showPayment.innerHTML = "3.19%";
                showTotal.innerHTML = `€${(convertPriceToNumber + (convertPriceToNumber * 3.19) / 100).toFixed(2)}`;
                monthPrice.innerHTML = `€${((convertPriceToNumber + (convertPriceToNumber * 3.19) / 100) / convertMonthToNumber).toFixed(2)}`;
                break;

            case "opel":
                showPayment.innerHTML = "1.45%";
                showTotal.innerHTML = `€${(convertPriceToNumber + (convertPriceToNumber * 1.45) / 100).toFixed(2)}`;
                monthPrice.innerHTML = `€${((convertPriceToNumber + (convertPriceToNumber * 1.45) / 100) / convertMonthToNumber).toFixed(2)}`;
                break;

            case "lada":
                showPayment.innerHTML = "1.78%";
                showTotal.innerHTML = `€${(convertPriceToNumber + (convertPriceToNumber * 1.78) / 100).toFixed(2)}`;
                monthPrice.innerHTML = `€${((convertPriceToNumber + (convertPriceToNumber * 1.78) / 100) / convertMonthToNumber).toFixed(2)}`;
                break;
        }

        firstPrice.innerHTML = `€${(carPrice * convertPercentToNumber / 100).toFixed(2)}`;
    });
}

showTotalCost();
showRangeValue();
showSecondRangeValue();