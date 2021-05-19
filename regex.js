let str = "1200";
// console.log(/((^\d{4}$)|(^\d{6}$))/.test(str));
console.log(/(^(\d{4})$)|^(\d{6}$)/.test(str));

//task2
let str1 = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str1.match(/[^'<>'].*/));
