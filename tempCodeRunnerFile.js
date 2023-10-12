const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'currencyConversions.json'); // Replace 'data.json' with your JSON file's name.
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

let currencyCodeJson = [];
// Now you can work with jsonData as a JavaScript object.
for (const [key, value] of Object.entries(jsonData.rates))
{
    currencyCodeJson.push(key);
}
console.log(currencyCodeJson);