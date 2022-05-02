


function expandedForm(num) {
  let str = num.toString();
  let len = str.length;
  let output = "";
  for (let i = 0; i < len; ++i) {
    let char = str.charAt(i);
    if (char != 0) {
      output = output + `${parseInt(char) * Math.pow(10, len - i - 1)} + `;
    }
  }
  console.log(output.slice(0, output.length - 3)); //pay attention to all empty spaces at the end
}

//expandedForm(324567)  // SOLVED


function breakCamelCase(string) {
  let len = string.length;
  let char = "";
  for (let i = 0; i < len; i++) {
    char = string.charAt(i);
    preChar = string.charAt(i - 1);
    if (char === char.toUpperCase() && preChar !== "") {
      string = string.replace(char, ` ${char}`);
    }
  }
  console.log(string.toString());
  console.log(typeof string);
}
//breakCamelCase('keechKeechKeech')

function convertToRoman(num) {
  let str = num.toString();
  let len = str.length;
  let output = "";
  for (let i = 0; i < len; ++i) {
    let char = str.charAt(i);
    let roman = parseInt(char) * Math.pow(10, len - i - 1);
   // for(let j = 0; j < parseInt(char); ++j){
     if (char != 0) {
      output = output
        .concat(roman)        
   // }
   }
  }
  console.log(output);

//positive integer
//max 3 same letters in a row
// I     1       IV   4   (1 + 5)        DC  600   (500 + 100)
// V     5       VI   6   (5 + 1)        CM  900   (100 + 1000)
// X     10      IX   9   (1 + 10)       III   111
// L     50      XL   40  (10 + 50)      XXX   101010
// C     100     LX   60  (50 + 10)      CCC   100100100
// D     500     XC   90  (10 + 100)     MMM   100010001000
// M     1000    CD   400 (100 + 500)
}

function findEvenIndex(arr) {
  //forfeited - no shame!
  let sumL = 0;
  // let sumR = arr.reduce((x, y) => x + y, 0);  //popular solution, also slower than for loop..  https://stackoverflow.com/questions/43556132/javascript-performance-reduce-vs-for-loop
  function sum(a) {
    let total = 0;
    for (let i = 0; i < a.length; ++i) {
      total += a[i];
    }
    return total;
  }
  let sumR = sum(arr);
  let n = -1;
  for (let i = 0; i < arr.length; ++i) {
    i <= 0 ? sumL : (sumL += arr[i - 1]);
    sumR -= arr[i];
    sumL === sumR ? (n = i) : n;
  }
  console.log(n);
}
findEvenIndex([1,2,3,4,3,2,1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);