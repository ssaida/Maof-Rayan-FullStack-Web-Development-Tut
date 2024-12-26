function calculator(operation){
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;
  if(isNaN(num1) || isNaN(num2)){
    alert('Invalid input');
    return;
  }
  switch(operation){
    case '+': 
              result = num1 + num2;
              break;
    case '-': result = num1 - num2;
              break;
    case '*': 
              result = num1 * num2;
              break;
    case '/':
      if(num2 === 0){
        alert('0 not divided');
        return;
      }
              result = num1 + num2;
              break;
    
    default:  'Invalid input';
              return;
  }
  document.getElementById('result').textContent = result;
  document.querySelector('tr')
}


