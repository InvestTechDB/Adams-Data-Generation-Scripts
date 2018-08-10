const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var primaryRecords = 10000000;

const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('PricesData5.csv'));
  
  for (let r = 1; r <= primaryRecords; r++) {
    for (let d = 1; d < 31; d++) {
      writer.write({
        companyId: r, 
        price_date: `2018-07-${d}`, 
        price: Number(parseFloat(Math.random() * (200 - 120) + 120).toFixed(2))
      })
    }
  }
  
  writer.end()
}

dataGenerator();