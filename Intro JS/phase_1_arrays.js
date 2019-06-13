Array.prototype.uniq = function unique() {
  let return_array = [];
  for (let index = 0; index < this.length; index++) {

    let element = this[index];
    if (!return_array.includes(element)) {
      return_array.push(element);
      
    };
  };
  return return_array;
};

Array.prototype.twoSum = function twoSum() {
  let returnArray = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        returnArray.push([i, j]);
      } 
    }
  }
  return returnArray;
};

Array.prototype.transpose = function transpose() {
  let returnArray = []
  for (let i = 0; i < this.length; i++) {
    let newRow = [];
    for (let j = 0; j < this.length; j++) {
      newRow.push(this[j][i]);
    }
    returnArray.push(newRow);
  }
  return returnArray;
}
