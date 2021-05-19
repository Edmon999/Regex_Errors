let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];
const gradeLab = (student) => {
  for (let el of student) {
    try {
      el["runLab"]();
    } catch {
      throw Error("Error Throw");
    }
  }
};
