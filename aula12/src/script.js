// Exemplo Método toString()
let num1 = 123;
let num1ToString = num1.toString();

console.log(num1);
console.log(num1ToString);

console.log(typeof num1);
console.log(typeof num1ToString);

// Exemplo método toExponencial()
let num2 = 3.147896;
let num2ToExponential = num2.toExponential(2);

console.log(num2ToExponential);

console.log("");

// Exemplo método toFixed()
let num3 = 678.98234;
let num3ToFixed = num3.toFixed(3);

console.log(num3ToFixed);

console.log("");

// Exemplo método toPrecision()
let num4 = 17.0945;
let num4ToPrecision = num4.toPrecision(3)

console.log(num4ToPrecision);

console.log("");

// Exemplo método valueOf()
let num5 = 123;
let num5Value0f = num5.valueOf();

console.log(num5Value0f);

console.log("");

// Exemplo método Number
let num6 = "1234567890";
let num6Number = Number(num6); 

console.log(num6Number);

console.log("");

// Exemplo método parseInt
let num7 = "23423.02934";
let num7ParseInt = parseInt(num7); 

console.log(num7ParseInt);

console.log("");

// Exemplo método parseFloat
let num8 = "23423.02934";
let num8ParseFloat = parseFloat(num8); 

console.log(num8ParseFloat);

// Exemplo método de objeto Number.isInteger()
let num9 = 12;
console.log(Number.isInteger(num9));

console.log("");

// Exemplo método de objeto Number.isFinite()
let num10 = 789;
console.log(Number.isFinite(num10));

console.log("");

// Exemplo método de objeto Number.isNaN()
let num11 = 2;
console.log(Number.isNaN(num11));
console.log(Number.isNaN(100 / "Texto"));

console.log("");

// Exemplo método de objeto Number.isSafeInteger()
let num12 = 78;
console.log(Number.isSafeInteger(num12));
console.log(Number.isSafeInteger(112233445566778899));

console.log("");

// Exemplo método de objeto Number.parseFloat()
let num13 = "5234.90";
console.log(Number.parseFloat(num13))

console.log("");

// Exemplo método de objeto Number.parseInt()
let num14 = "5234";
console.log(Number.parseInt(num14))

console.log("");