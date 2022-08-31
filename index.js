const ffi = require("ffi-napi");

const libfactorial = ffi.Library("./DllTest_x64.dll", {
  factorial: ["int", ["int"]],
});

console.log("4! = ");
const result = libfactorial.factorial(4);
console.log(result);
