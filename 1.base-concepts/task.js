"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b,2)-4*a*c;

  if ((a === 0 && b === 0 && c === 0) 
    || (typeof(a) !== 'number') 
    || (typeof(b) !== 'number') 
    || (typeof(c) !== 'number')) {
    arr.push('error');
    arr = arr.join('');
  } else if (discriminant > 0) {
    arr.push((-b+Math.sqrt(discriminant))/(2*a), (-b-Math.sqrt(discriminant))/(2*a));
  } else if (discriminant === 0) {
    arr.push(-b/(2*a));
  }

  return arr;
}

solveEquation();


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  for ( let i = 0; i < arguments.length; i++) {
    if (isNaN(Number(arguments[i]))) {
      return false;
    } 
  }

  if (percent < 0 || percent > 100) {
    return false;
  }

  // расчет месячной процентной ставки
  let monthlyInterestRate = percent/100/12;
  // расчет суммы кредита
  let creditAmount = amount - contribution;
  // расчет ежемесячной выплаты
  let monthlyPayment = creditAmount*(monthlyInterestRate+monthlyInterestRate/(Math.pow((1+monthlyInterestRate), countMonths)-1));
  // расчет полной стоимости кредита
  let totalLoanCost = +(monthlyPayment*countMonths).toFixed(2);

  return totalLoanCost;
}

calculateTotalMortgage();