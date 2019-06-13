Array.prototype.myEach = function myEach(callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    callback(element);
  }
};

function printer(element) {
  console.log(element);
};

Array.prototype.myMap = function myMap(callback) {
  const mappedArray = []
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i]));
  }
  return mappedArray;
};

function square(element) {
  return element * element;
}

Array.prototype.myReduce = function myReduce(callback, initialValue = null) {
  let x = 0
  if (initialValue === null) {
     initialValue = this[0];
     x = 1;
  }
  for (let i = x; i < this.length; i++) {
    const element = this[i];
    initialValue = callback(initialValue, element);
  }
  return initialValue;
};

function add(a, num) {
  return a + num;  
}
