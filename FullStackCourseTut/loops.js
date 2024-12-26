console.log('Break & Continue:');
function printUntilBreak(num){
  let breakPoint = num / 2;
  for(let i=0;i<num;i++){
    if(i%2 === 0)
      continue;
    else console.log(`Current number index is ${i}`);
  }
}
printUntilBreak(2 );

console.log('Generate Random Password');
const letters = 'abcdefghijklmnopqrstuvwxyzABCSEFGIJKLMNOPQRSTUVWXYZ1234567890';
function generateRandomPassword(passwordLength){
  let randomStr = ``
  
  for(let i=0;i<passwordLength;i++){
    let randomIdx = getRandomNumber(1, letters.length-1);
    randomStr += letters[randomIdx];
  }
  return randomStr;
}
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(letters);
for(let i=0;i<10;i++)
  console.log(generateRandomPassword(10));