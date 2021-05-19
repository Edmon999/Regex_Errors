//Convert the code using try...catch.
const convert = (str) => {
  try {
    typeof str === "string";
    str = str.split("").reverse().join("");
    console.log(str);
  } catch (e) {
    console.log(e);
  }
};
convert([]);
