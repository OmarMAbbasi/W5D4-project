function range(start, end) {

  if (start === end) {
    return [end]
  }
  return [start].concat(range(start+1, end))
}

function sumRec(array) {
  if (array.length === 1) {
    return array[0];
  }
  let [x,...rest] = array;
  return x + sumRec(rest);
  // return array[0] + sumRec(array.slice(1,array.length));
}

function exponent(base, exp) {
  if(exp === 0) {
    return 1;
  } else if(exp === 1) {
    return base;
  }
  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }
  if(exp % 2 === 0) {
    return (exponent2(base, exp / 2) ** 2)
  } else {
    return base * (exponent2(base, (exp - 1) / 2) ** 2)
  }
}

function fibbo(n)  {
  if (n===1) {
    return [1]
  } else if (n===2) {
    return [1,1]
  }
  let fib = fibbo(n-1)
  let lastTwo = fib.slice(-2)
  // debugger;
  fib.push(lastTwo[0]+lastTwo[1])
  // fibbo(2) ==> [1,1] [2]
  return fib; 
}

function deepDup(arr) {
  let duped = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      duped.push(arr[i]);
    }
    else {
      duped.push(deepDup(arr[i]));
    }
  }
  return duped;
}

function deepDup(arr) {

  let duped = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      duped.push(arr[i]);
    } else {
      duped.push(deepDup(arr[i]));
    }
  }
  return duped;
}