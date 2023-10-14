/** Name: Sukhnain Deol
 *  Purpose: This program prompts the user for a currency code to convert, the amount to convert,
 *           and the currency code to convert to. Then it alerts the user the resulting conversion.
 */



/** 
 * prompts user for currency code, amount to convert, and converted
 * currency code then alerts thems with the converted value
 */
function promptConvertCurrency() 
{
    let date = "2022-09-24";
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

    // ask user for original currency's code
    let questionOne = "Hello, Welcome to the Currency Converter!\nWhat currency would you like to convert? (3-digit code)";
    let currencyCodeError = "Please enter a valid currency code, use the currency searcher to help.";
    let currentCurrency = askForString(questionOne, rates, currencyCodeError);

    // ask user for amount to convert
    let questionTwo = "How much do you want to convert?";
    let amount = askForNumber(questionTwo);
    
    // ask user for currency code to convert to
    let questionThree = "What currency do you want it converted to? (3-digit code)";
    let convertedCurrency = askForString(questionThree, rates, currencyCodeError);


    // multiplies amount by a fraction of current and converted currrencies' values & round to 2 decimal
    let convertedValue = (amount * (rates[convertedCurrency]/rates[currentCurrency])).toFixed(2);

    // alert conversion value to user (e.g. "100 USD is 153.19 AUD. As of 2022-09-24")
    alert(amount + " " + currentCurrency + " is " + convertedValue + " " + convertedCurrency + ". As of " + date + ".");
}



/** 
 * prompts user a question and alerts a provided error if the input is not 
 * from the provided answers and repeats, then returns onces a valid string is entered
 * 
 * @param {string} question - question to prompt
 * @param {object} answers - valid answers to prompt
 * @param {string} errorAnswer - error to alert for invalid input
 * 
 * @returns - user input if it is valid
 */
function askForString(question, answers, errorAnswer)
{
    do // ask question, give error answer if incorrect
    { 
        var answer = prompt(question);
        if (!(answer.toUpperCase() in answers)) {alert(errorAnswer);}
    } 
    while (!(answer.toUpperCase() in answers));

    return answer.toUpperCase();
}



/** 
 * prompts user a question until they input a number
 * 
 * @param {string} question - question to prompt
 * 
 * @returns - inputted number from user 
 */
function askForNumber(question)
{
    do // ask question, give error answer if incorrect
    {
        var answer = prompt(question);
        if (isNaN(answer)) {alert("Please enter a number");}
    } while (isNaN(answer));

    return answer;
}