const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: './Data.csv',
    header: [
        {id: 'companyName', title: 'COMPANYNAME'},
    ]
});

var amount = 10000000;

function createCSV(recordNum) {
  if (recordNum === amount) {
    return
  }

  let data = [{companyName: faker.company.companyName()}];
  csvWriter.writeRecords(data).then(() => createCSV(recordNum + 1));
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