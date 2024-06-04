
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function (valueInDollars){

    let valueInEuro = valueInDollars/oneEuroIs.USD;
    let valueInYens = valueInEuro*oneEuroIs.JPY;
    valueInYens = parseFloat(valueInYens.toFixed(3));
    return valueInYens;

}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromYenToPound = function(valueInYens){

    let valueInEuro = valueInYens/oneEuroIs.JPY;
    let valueInPounds = valueInEuro*oneEuroIs.GBP;
    valueInPounds = parseFloat(valueInPounds.toFixed(3));
    return valueInPounds;

}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// Export the function to be used on other files
// export default { sum };
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

