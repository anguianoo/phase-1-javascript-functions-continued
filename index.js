// code your solution here

function saturdayFun(string = "roller-skate") {
  console.log(`"This Saturday, I want to ${string}!"`);
}

// function mondayWork(string) {
//   if (string != "") {
//     console.log(`This Monday, I will ${string}`);
//   } else console.log("This Monday, I will go to the office");
// }

let mondayWork = function (string = "go to the office") {
  return `this Monday, I will ${string}`;
};

let wrapAdjective = function (style = "*") {
  return function (string = "special") {
    return `You are ${style}${string}${style}!`;
  };
};
