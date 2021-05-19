const isPositive = (num) => {
  if (num > 0) {
    return "yes";
  } else if (num === 0) {
    throw Error("Zero error");
  }
  throw Error("Negative error");
};
