function sum(x) {
    return x.reduce((accum, i) => accum + i, 0);
  }
  
  function multiply(x) {
    return x.reduce((accum, i) => accum * i, 1);
  }
  
  function reverse(x) {
    return x.split("").reduce((accum, c) => c + accum);
  }
  
  function filterLongWords(words, i) {
    return words.filter((w) => w.length > i);
  }