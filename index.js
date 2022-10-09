import ffi from "ffi-napi";

// --------------------------------------------------------
// test-1 : libm from OSX
// --------------------------------------------------------
// const libm = ffi.Library("libm", {
//   ceil: ["double", ["double"]],
// });
// console.log(libm.ceil(2.5));

// --------------------------------------------------------
// test-2 : custom dll from Windows
// --------------------------------------------------------
const libMath = ffi.Library("./DllTest.dll", {
    factorial: ["int", ["int"]],
});

console.log("4! = ");
const result = libMath.factorial(4);
console.log(result);
