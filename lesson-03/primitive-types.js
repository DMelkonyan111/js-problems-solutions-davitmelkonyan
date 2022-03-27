// Working with variables
let admin, name;

name = "John";
admin = name;

console.log(admin);


// What will be output of i and n
let i = 10;
let n = i++ % 5;
console.log(i, n);

// as ++ is written after i, the system will add 1 to i at the end, so n = 10 % 5 which is 0, and i becomes 11


// Swap two variables
let a = 10, b = 3;
let c = a;
a = b;
b = c;
console.log(a, b);


// Swap two variables without using the third one
let x = 10, y = 3;
x += y;
y = x - y;
x -= y;
console.log(x, y);
