N. 1

function deepCopy(obj) {
  const objClon = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    objClon[key] = (typeof obj[key] === 'object' && obj[key] !== null) ? deepCopy(obj[key]) : obj[key];
    }
    return objClon;
  }

N. 2

function range(x, y) {
  if(y - x <= 1) return [];
  let result = [++x];
  if(x + 1 < y) result = result.concat(range(x, y));
  return result;
}

N. 3

function sortArray(arr) {
  if(!arr.length) return [];
  let result = [];
  let map = new Map();
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let dif = max - min;
   do {
    map.set(min++, 0);
  } while(dif--);
  arr.forEach(elem => map.set(elem, map.get(elem) + 1));
  map.forEach((value, key) => {while (value--) result.push(key)});
  return result;
}

N. 4

function allSubsets({arr, arrClone1 = [...arr], arrClone2 = [...arrClone1], result = []}) {
  if (arrClone2.length <= 2) return arr;
  while (arrClone2.length >= 3) {
    result.push(arrClone2.slice(0,3));
    arrClone2.splice(2,1);
  };
  arrClone1.splice(1,1);
  allSubsets({arr, arrClone1, result});
  arr.shift();
  allSubsets({arr, result});
  return result;
}