function doSome(number, callback){
  return callback(number);
}
function power2(number){
  return Math.pow(number, 2);
}
function negative(number){
  return -number;
}
alert(doSome(5, power2));
alert(doSome(5, negative));