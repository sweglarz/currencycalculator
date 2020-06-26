{
    const calculateResult = (amount, currencyTo) => {

        const usd = 3.99355;
        const euro = 4.46480;
        const gbp = 4.93091;
        const chf = 4.19317;

        switch (currencyTo) {
            case "USD":
                return amount / usd;
            case "EUR":
                return amount / euro;
            case "CHF":
                return amount / chf;
            case "GBP":
                return amount / gbp;
        }
    };
    const updateResultText = (amount, result, currencyTo) => {
        const money = document.querySelector(".js-strong");
        money.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currencyTo}`;
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountField = document.querySelector(".js-amount");
        const optionTo = document.querySelector(".js-optionTo");
        

        const amount = +amountField.value;
        const currencyTo = optionTo.value;
        const result = calculateResult(amount, currencyTo);

        updateResultText(amount, result, currencyTo);
    };

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };
    init();
}