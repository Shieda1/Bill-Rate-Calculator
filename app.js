// https://www.omnicalculator.com/finance/bill-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const billrateRadio = document.getElementById('billrateRadio');
const annualsalaryRadio = document.getElementById('annualsalaryRadio');
const capacityRadio = document.getElementById('capacityRadio');
const multiplierRadio = document.getElementById('multiplierRadio');

let billrate;
let annualsalary = v1;
let capacity = v2;
let multiplier = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

billrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual salary';
  variable2.textContent = 'Capacity';
  variable3.textContent = 'Multiplier';
  annualsalary = v1;
  capacity = v2;
  multiplier = v3;
  result.textContent = '';
});

annualsalaryRadio.addEventListener('click', function() {
  variable1.textContent = 'Bill rate';
  variable2.textContent = 'Capacity';
  variable3.textContent = 'Multiplier';
  billrate = v1;
  capacity = v2;
  multiplier = v3;
  result.textContent = '';
});

capacityRadio.addEventListener('click', function() {
  variable1.textContent = 'Bill rate';
  variable2.textContent = 'Annual salary';
  variable3.textContent = 'Multiplier';
  billrate = v1;
  annualsalary = v2;
  multiplier = v3;
  result.textContent = '';
});

multiplierRadio.addEventListener('click', function() {
  variable1.textContent = 'Bill rate';
  variable2.textContent = 'Annual salary';
  variable3.textContent = 'Capacity';
  billrate = v1;
  annualsalary = v2;
  capacity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(billrateRadio.checked)
    result.textContent = `Bill rate = ${computebillrate().toFixed(2)}`;

  else if(annualsalaryRadio.checked)
    result.textContent = `Annual salary = ${computeannualsalary().toFixed(2)}`;

  else if(capacityRadio.checked)
    result.textContent = `Capacity = ${computecapacity().toFixed(2)}`;

  else if(multiplierRadio.checked)
    result.textContent = `Multiplier = ${computemultiplier().toFixed(2)}`;
})

// calculation

function computebillrate() {
  return (Number(annualsalary.value) / Number(capacity.value)) * Number(multiplier.value);
}

function computeannualsalary() {
  return (Number(billrate.value) / Number(multiplier.value)) * Number(capacity.value);
}

function computecapacity() {
  return Number(annualsalary.value) / (Number(billrate.value) / Number(multiplier.value));
}

function computemultiplier() {
  return Number(billrate.value) / (Number(annualsalary.value) / Number(capacity.value));
}