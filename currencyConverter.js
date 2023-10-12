// Name: Sukhnain Deol
// Purpose:

// tODO;
    // integrate with existing code
    // make css for buttons nicer
    // currncy search.js

function promptConvertCurrency() 
{
    let rates = 
    { 
        "AUD": 1.531863,
        "CAD": 1.36029,
        "CLP": 950.662057,
        "CNY": 7.128404,
        "EUR": 1.03203,
        "GBP": 0.920938,
        "INR": 81.255504,
        "JPY": 143.376504,
        "RUB": 57.875038,
        "USD": 1.00,
        "ZAR": 17.92624
    };

    let date = "2022-09-24";


    
    // ask user for original currency's code
    let questionOne = "Hello, Welcome to the Currency Converter!\nWhat currency would you like to convert? (3-digit code)";
    let currencyCodeError = "Please enter a valid currency code, use the currency searcher to help.";
    let currentCurrency = askForString(questionOne, rates, currencyCodeError);

    // ask user for amount to convert
    let questionTwo = "How much do you want to convert?";
    let currencyAmount = askForNumber(questionTwo);
    
    // ask user for currency code to convert to
    let questionThree = "What currency do you want it converted to? (3-digit code)";
    let convertedCurrency = askForString(questionThree, rates, currencyCodeError);


    // calculate value & round to 2 decimal
    let convertedValue = convertCurrency(currentCurrency, convertedCurrency, currencyAmount, rates);

    // alert conversion value to user
    alert(currencyAmount + " " + currentCurrency + " is " + convertedValue + " " + convertedCurrency + ". As of " + date + ".");
}


function convertCurrency(current, converted, amount, rates)
{
    return (amount * (rates[converted]/rates[current])).toFixed(2);
}



function askForString(question, answerJson, errorAnswer)
{
    do // ask question, give error answer if incorrect
    { 
        var answer = prompt(question);
        if (!(answer.toUpperCase() in answerJson)) {alert(errorAnswer);}
    } 
    while (!(answer.toUpperCase() in answerJson));

    return answer.toUpperCase();
}


function askForNumber(question)
{
    do // ask question, give error answer if incorrect
    {
        var answer = prompt(question);
        if (isNaN(answer)) {alert("Please enter a number");}
    } while (isNaN(answer));

    return answer;
}