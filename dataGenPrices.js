const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const Promise = require('bluebird')

const csvWriter = createCsvWriter({
    path: './PricesData.csv',
    header: ['companyId', 'price', 'price_date']
});

var amount = 10000000;

function createCSV(recordNum) {
  if (recordNum === amount) {
    return 'done'
  }

  recordNum++;



  createRecord(1, recordNum)
    
}

function createRecord(day, companyId) {
  if (day === 31) {
    createCSV(companyId);
    return;
  }

  let date = `2018-07-${day}`;
  let price = faker.commerce.price(100.01,200.00,2);
  let data = [{companyId: companyId, price: price, price_date: date}]

  csvWriter.writeRecords(data).then(() => {
    createRecord(day + 1, companyId);
  });


}

createCSV(0);




// const createCSV = (dataAmount, fileName) => {
//   dataAmount = dataAmount || 10000000
//   fileName = fileName || 'Data.csv'
//   let data = []
//     for(let i = 0; i <= dataAmount; i++){
//       data.push([faker.name.firstName(), faker.name.lastName(), faker.name.jobType()])
//     }
//   createCSVFile(fileName, data);
// }
// createCSV();