const fetch = require('node-fetch');
let callType = process.argv[2];
switch(callType){
    case 'xrate':
    callXRate(process.argv[3], process.argv[4])
    break;
    case 'stock':
    callStock(process.argv[3])
    break;
    default:
    console.log("Invalid Option");
}
async function callStock(sybmol){
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=YMYAGGPG7KDJ3MKA`);
    let json = response.json();
    console.log(json);
}
async function callXRate(from, to){
    const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey==YMYAGGPG7KDJ3MKA`);
    let json = response.json();
    console.log(json);
}