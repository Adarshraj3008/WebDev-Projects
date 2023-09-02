var itemPriceUsd = {"soap": 10,"shampoo":20,"oil":30,"toy":50,"bottle":100};

var ExhangeRate = 80;

var itemPriceInr = Object.keys(itemPriceUsd).reduce(function (result,key) {
    result[key] = itemPriceUsd[key] * ExhangeRate;
    return result;
},{});

console.log("-------Item Price In USD Dollar-------");
console.log(itemPriceUsd);
console.log("-------Item Price In INR Rupees-------");
let IndianPrice = ("Converted price USD Dollar to INR: ",itemPriceInr);

console.log(IndianPrice);