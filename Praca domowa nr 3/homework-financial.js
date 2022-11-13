const financialData = require("./financial.json");

console.log(
  "Financial data: " +
    getFinancialObject(financialData).moneySpent2014.toFixed(2)
);

function getFinancialObject(data) {
  const financialObject = {};
  // TODO (create functions for calculations below)
  //i.	How much money was spent in 2014
  financialObject.moneySpent2014 = data
    .filter((currentElement) => getYear(currentElement) === 2014)
    .reduce((sum, currentElement) => {
      return sum + Number(currentElement.cost);
    }, 0);
  return financialObject;
}

// TODO (util functions)
function getYear(data) {
  const year = Number(data.detailsOfPayent.date.slice(-4));
  return year;
}

function distinctCompanies(data) {
  const result = [];
  data.forEach((element) => {
      result.push(element.detailsofPayent.company);
    })
  return [...new Set(result)];
}

console.log(distinctCompanies(financialData));
