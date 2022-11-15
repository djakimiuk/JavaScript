const financialData = require("./financial.json");

console.log("Financial data: " + getFinancialObject(financialData));

function getFinancialObject(data) {
  const financialObject = {};
  // TODO (create functions for calculations below)
  //i.	How much money was spent in 2014
  financialObject.moneySpentIn2014 = parseFloat(
    data
      .filter(
        (currentElement) => stringToDate(currentElement).getFullYear() === 2014
      )
      .reduce((sum, currentElement) => {
        return sum + parseFloat(currentElement.cost);
      }, 0)
      .toFixed(2)
  );
  // ii.	Earnings per company
  const companyArray = distinctCompanies(data);
  financialObject.earningsPerCompany = {};
  companyArray.forEach((company) => {
    financialObject.earningsPerCompany[company] = parseFloat(
      data
        .filter(
          (currentElement) => currentElement.detailsOfPayent.company === company
        )
        .reduce((sum, currentElement) => {
          return sum + parseFloat(currentElement.cost);
        }, 0)
        .toFixed(2)
    );
  });

  //iii.	Spendings per transaction type
  const transactionArray = distinctTransactionType(data);
  financialObject.spendingsPerTransType = {};
  transactionArray
    .sort((a, b) => a - b)
    .forEach((type) => {
      financialObject.spendingsPerTransType[`Type ${type}`] = parseFloat(
        data
          .filter(
            (currentElement) => currentElement.detailsOfPayent.Type === type
          )
          .reduce((sum, currentElement) => {
            return sum + parseFloat(currentElement.cost);
          }, 0)
          .toFixed(2)
      );
    });

  // iv.	Spendings by month
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  financialObject.spendingsPerMonth = {};
  monthArray.forEach((month, index) => {
    financialObject.spendingsPerMonth[month] = parseFloat(
      data
        .filter(
          (currentElement) => stringToDate(currentElement).getMonth() === index
        )
        .reduce((sum, currentElement) => {
          return sum + parseFloat(currentElement.cost);
        }, 0)
        .toFixed(2)
    );
  });

  // v.	Spendings per day of the week
  const weekDaysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  financialObject.spendingsPerDayOfTheWeek = {};
  weekDaysArray.forEach((day, index) => {
    financialObject.spendingsPerDayOfTheWeek[day] = parseFloat(
      data
        .filter(
          (currentElement) => stringToDate(currentElement).getDay() === index
        )
        .reduce((sum, currentElement) => {
          return sum + parseFloat(currentElement.cost);
        }, 0)
        .toFixed(2)
    );
  });

  return console.log(financialObject);
}

// TODO (util functions)
function stringToDate(data) {
  return new Date(
    data.detailsOfPayent.date.slice(-4),
    data.detailsOfPayent.date.slice(3, 5) - 1,
    data.detailsOfPayent.date.slice(0, 2)
  );
}

function distinctCompanies(data) {
  return (result = [
    ...new Set(data.map((element) => element.detailsOfPayent.company)),
  ]);
}

function distinctTransactionType(data) {
  return (result = [
    ...new Set(data.map((element) => element.detailsOfPayent.Type)),
  ]);
}

let a = 1;
