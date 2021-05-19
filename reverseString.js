const reverseString = (str) => {
  try {
    str = str.split("").reverse().join("");
    console.log(str);
  } catch (e) {
    console.log(e);
  }
};
reverseString("ema");
