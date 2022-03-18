const DEFAULT_RESULT = 0;
let currentInputNum = "";
let currentValue = DEFAULT_RESULT;
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
   currentValue = 1; 
   currentValue *= userInput();
   currentInputNum = "";
   resultViewer.innerHTML = currentValue;
};

numberBtn.forEach((number) => {
   number.addEventListener("click", numberHandler.bind(this, number.innerHTML));
});
sumBtn.addEventListener("click", sumHandler);
subtractBtn.addEventListener("click", subtractHandler);
multipleBtn.addEventListener("click" , multipleHandler);