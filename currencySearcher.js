/**
 *  Name: Sukhnain Deol
 *  Purpose: This program prompts a user for a partial string of a currency code then 
 *          searches a JSON of currency codes keys and associated full name 
 *          to alert the user of currencies that have that partial string as a substring
 */          



/** 
 * prompts the user for a search string and returns any key or value
 * in symbols that have that value as a substring
 * 
 * Example: user enters 'aud' in prompt, function alerts "AUD: Australian Dollar"
 */
function promptSearchCurrency()
{
    // currency codes & associated values
    let symbols = 
    {
        "AUD": "Australian Dollar",
        "CAD": "Canadian Dollar",
        "CLP": "Chilean Peso",
        "CNY": "Chinese Yuan",
        "EUR": "Euro",
        "GBP": "British Pound Sterling",
        "INR": "Indian Rupee",
        "JPY": "Japanese Yen",
        "RUB": "Russian Ruble",
        "USD": "United States Dollar",
        "ZAR": "South African Rand"
    };

    // get searchString and use it to search symbols then alert user of results
    let searchString = prompt("Hello, Welcome to the Currency Searcher!\nPlease enter a part of the currency's name.").toLowerCase();
    let searchResults = searchCurrency(searchString, symbols);
    alertFormattedSymbols(searchResults);
}



/** 
 * searches objects for keys of values that match searchString and return 
 * them in an array
 * 
 * @param {string} searchString - string given by user to search
 * @param {object} symbols - object of currency codes and names
 * 
 * @returns {array} - array of valid keys-value pairs (key: Value)
 */
function searchCurrency(searchString, symbols)
{
    let searchResults = [];
    // search each code, name object and add it to arr if it includes partial string
    for (let [key, value] of Object.entries(symbols))
    {
        if (key.toLowerCase().includes(searchString) || value.toLowerCase().includes(searchString)) 
        {
            searchResults.push(key + ": " + value);
        }
    }
    return searchResults;
}



/** 
 * Formats elements in arr to each on their own line and alerts
 * them as search result, if arr is empty, alert as such
 * 
 * @param {array} arr - array of values to add to alertValue
 * 
 * Returns
 */
function alertFormattedSymbols(arr)
{
    // format each arr element on its own line 
    let alertValue = "";
    for(let i = 0; i < arr.length; i++) {alertValue += arr[i] + "\n";}

    // if no results, alert as such
    if (alertValue.length === 0) {alert("No currencies contain that string.");}
    else {alert("Search Results:\n" + alertValue);}
}