let arr = [2, 3, 4, 5, 6, 7, 8, 0, 1, "@", "a"];

function double(e) {
  return e * 2;
}

function binary(x) {
  return x.toString(2);
}

let brr = arr.map(binary);
console.log(brr);
