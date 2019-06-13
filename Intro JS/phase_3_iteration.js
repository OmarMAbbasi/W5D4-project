Array.prototype.bubbleSort = function bubbleSort() {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if(this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      }
    }
  };
  return this;
}

String.prototype.substrings = function substrings() {
  let return_array = [];
  
  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j <= this.length; j++) {
      return_array.push(this.slice(i,j));
    };
  };
  console.log(return_array);
}
