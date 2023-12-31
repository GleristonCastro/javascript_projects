const calculateBtn = document.querySelector('#calculateBtn');

calculateBtn.addEventListener('click', () => {

  const billAmount = parseFloat(document.querySelector('#billAmount').value);
  const serviceQuality = parseFloat(document.querySelector('#serviceQuality').value);

  if (billAmount === '') alert('Please fill in the required information.');

  const tipAmount = billAmount * serviceQuality;
  const totalAmount = billAmount + tipAmount;

  const tipAmountInput = document.querySelector('#tipAmount');
  const totalAmountInput = document.querySelector('#totalAmount');

  tipAmountInput.value = tipAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  totalAmountInput.value = totalAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
});