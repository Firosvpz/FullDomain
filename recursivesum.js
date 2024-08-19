function sum(n1, n2) {
    if (n2 === 0) {
      return n1;
    }
    return sum(n1 + 1, n2-1);
  }
  
  let res = sum(0, 4);
  console.log(res); // Output: 4
  