const DEFAULT_RESULT = 0;
const DEFAULT_RESULT_FOR_MUL_AND_SUB = 1;
let currentInputNum = "";
let currentValue = DEFAULT_RESULT;
let currentValueSubMul = DEFAULT_RESULT_FOR_MUL_AND_SUB;
resultViewer.innerHTML = currentValue;

const userInput = () => {
   return Number(currentInputNum);
};

const numberHandler = (btnValue) => {
   currentInputNum += btnValue;
   resultViewer.innerHTML = currentInputNum;
   console.log(currentInputNum);
};

const sumHandler = () => {
   currentValue += userInput();
   currentInputNum = "";
   resultViewer.innerHTML = currentValue;
};

const subtractHandler = () => {
   currentValue -= userInput();
   currentInputNum = "";
   resultViewer.innerHTML = currentValue;
};

const multipleHandler = () => {
   const userEnteredNumber = userInput();
   currentValueSubMul *= userEnteredNumber;
   currentInputNum = "";
   resultViewer.innerHTML = currentValueSubMul;
};

numberBtn.forEach((number) => {
   number.addEventListener("click", numberHandler.bind(this, number.innerHTML));
});
sumBtn.addEventListener("click", sumHandler);
subtractBtn.addEventListener("click", subtractHandler);
multipleBtn.addEventListener("click", multipleHandler);
