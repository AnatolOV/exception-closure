function parseCount(str){
   
  let result = Number.parseInt(str);
  
  if (isNaN(result)){
    console.log('Невалидное значение');
    //throw 'Невалидное значение'; //???почему с throw  не выводится 'Невалидное значение'
  }
  return result;
  
}
let obj = '21';
console.log(parseCount(obj));

function validateCount(str) {
  let res = parseCount(str);
  
  if (!isNaN(res)){
    return res;
  } else {
    return 'Невалидное значение';
 }
                         
  }