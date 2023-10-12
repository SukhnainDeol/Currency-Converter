// Name: Sukhnain Deol
// Purpose:

// tODO;
    // make jsons work
    // integrate with existing code
    // make css for buttons nicer
    // currncy search.js

function convertCurrency() 
{
    let currencyCodeJson = [];

    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(__dirname, 'currencyConversions.json'); 
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    for (const [key, value] of Object.entries(jsonData.rates))
    {
        currencyCodeJson.push(key);
    }

    
    // ask user for original currency's code
    let questionOne = "Hello, Welcome to the Currency Converter!\nWhat currency would you like to convert? (3-digit code)";
    let currencyCodeError = "Please enter a valid currency code, use the currency searcher to help.";
    let currencyCode = askForString(questionOne, currencyCodeJson, currencyCodeError);

    // ask user for amount to convert
    let questionTwo = "How much do you want to convert?";
    let currencyAmount = askForNumber(questionTwo);
    
    // ask user for currency code to convert to
    let questionThree = "What currency do you want it converted to? (3-digit code)";
    let convertedCurrencyCode = askForString(questionThree, currencyCodeJson, currencyCodeError);


    // calculate value & round to 2 decimal
    let convertedValue = 1.555.toFixed(2);

    // alert conversion value to user
    alert(currencyAmount + " " + currencyCode + " is " + convertedValue + " " + convertedCurrencyCode + ".");
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


async function getConversionsJson()
{
    const requestURL = "currencyConversions.json";

    const response = await fetch(requestURL);
    const json = await response.json();

    return json;
}

function processData(data) {
    const name = data.name;
    const age = data.age;
  
    console.log(`Name: ${name}, Age: ${age}`);
  }