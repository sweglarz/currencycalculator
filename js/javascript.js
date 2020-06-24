let form = document.querySelector(".js-form");
let amountField = document.querySelector(".js-amount");
let optionTo = document.querySelector(".js-optionTo");
let money = document.querySelector(".js-strong");

let usd = 3.99355;
let euro = 4.46480;
let gbp = 4.93091;
let chf = 4.19317;

form.addEventListener("submit", (event) => {
    event.preventDefault();
 
    let amount = +amountField.value;
    let currencyTo = optionTo.value;
    let result; 

switch (currencyTo) {
    case "USD":
        result = amount / usd;
        break;
    case "EUR":
        result = amount / euro;
        break;
    case "CHF":
        result = amount / chf;
        break;
    case "GBP":
        result = amount / gbp;
        break;
};

money.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currencyTo}`;

});