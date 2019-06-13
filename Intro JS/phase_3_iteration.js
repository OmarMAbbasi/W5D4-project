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