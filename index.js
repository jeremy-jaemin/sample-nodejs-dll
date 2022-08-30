const ffi = require("ffi-napi");
const path = require("path");

// test 1
const libfactorial = ffi.Library("./DllTest_x64.dll", {
  factorial: ["int", ["int"]],
});

// const arch = process.arch;
// const libfactorial = ffi.Library(path.resolve(__dirname, `../${arch}`), {
//   factorial: ["int", ["int"]],
// });

console.log("=============================================");
const result = libfactorial.factorial(4);
console.log(result);
console.log("=============================================");

// // test 2
// const libm = ffi.Library("libm", {
//   ceil: ["double", ["double"]],
// });
// console.log("=============================================");
// console.log(libm.ceil(1.5));
// console.log("=============================================");

// const libnull = ffi.Library(null, {
//   atoi: ["int", ["string"]],
// });
// console.log("=============================================");
// console.log(libnull.atoi("1234"));
// console.log("=============================================");
