// Name: Sukhnain Deol
// Purpose:


function promptSearchCurrency()
{
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

    let searchString = prompt("Hello, Welcome to the Currency Searcher!\nPlease enter a part of the currency's name.").toLowerCase();

    let searchResults = searchCurrency(searchString, symbols);

    alertFormattedSymbols(searchResults);
}


function searchCurrency(searchString, symbols)
{
    let searchResults = [];

    for (let [key, value] of Object.entries(symbols))
    {
        if (key.toLowerCase().includes(searchString) || value.toLowerCase().includes(searchString)) 
        {
            searchResults.push(key + ": " + value);
        }
    }

    return searchResults;
}


function alertFormattedSymbols(arr)
{
    let alertValue = "";
    for(let i = 0; i < arr.length; i++)
    {
        alertValue += arr[i] + "\n";
    }
    if (alertValue.length === 0) {alert("No currencies contain that string.");}
    else {alert("Search Results:\n" + alertValue);}
}