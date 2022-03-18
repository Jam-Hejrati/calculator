const DEFAULT_RESULT = 0;
let currentInputNum = "";
let currentValue = DEFAULT_RESULT;
resultViewer.innerHTML = currentValue;

const numberHandler = (btnValue) => {
   currentInputNum += btnValue;
   resultViewer.innerHTML = currentInputNum;
   console.log(currentInputNum);
};

const sumHandler = () => {
   currentValue += Number(currentInputNum);
   currentInputNum = "";
   resultViewer.innerHTML = currentValue;
};

const subtractHandler = () => {
   currentValue -= Number(currentInputNum);
   currentInputNum = "";
   resultViewer.innerHTML = currentValue;
};

numberBtn.forEach((number) => {
   number.addEventListener("click", numberHandler.bind(this, number.innerHTML));
});
sumBtn.addEventListener("click", sumHandler);
subtractBtn.addEventListener("click", subtractHandler);
