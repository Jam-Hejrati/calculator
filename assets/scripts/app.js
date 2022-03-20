const DEFAULT_RESULT = 0;
let currentInputNum = "";
let currentValue = DEFAULT_RESULT;
resultViewer.innerHTML = currentValue;

const userInput = () => {
   if(currentInputNum === ""){
      return 1;
   }
   return Number(currentInputNum);
};

const validateNumber = (number) =>{
   if(isNaN(number)){
      return "reset the calculator";
   }else{
      return number;
   }
}

const numberHandler = (btnValue) => {
   currentInputNum += btnValue;
   resultViewer.innerHTML = currentInputNum;
   console.log(currentInputNum);
};

const sumHandler = () => {
   currentValue += userInput();
   currentInputNum = "";
   resultViewer.innerHTML = validateNumber(currentValue);
};

const subtractHandler = () => {
   currentValue -= userInput();
   currentInputNum = "";
   resultViewer.innerHTML = validateNumber(currentValue);
};

const multipleHandler = () => {
   const userEnteredNumber = userInput();
   if (currentValue === 0) {
      currentValue = 1;
      currentValue *= userEnteredNumber;
   } else if (userInput() === 0) {
      currentValue = 0;
      currentValue *= userEnteredNumber;
   } else{
      currentValue *= userEnteredNumber;      
   }
   currentInputNum = "";
   resultViewer.innerHTML = validateNumber(currentValue);
};

const divideHandler = () => {
   const userEnteredNumber = userInput();
   if (currentValue === 0) {
      currentValue = 1;
      currentValue = userEnteredNumber / currentValue;
   } else if (userInput() === 0) {
      currentValue /= userEnteredNumber;
   } else{
      currentValue /= userEnteredNumber;      
   }
   currentInputNum = "";
   resultViewer.innerHTML = validateNumber(currentValue);
};

const cleanResult = () =>{
   currentInputNum = '';
   currentValue = DEFAULT_RESULT;
   resultViewer.innerHTML = currentValue;
}

numberBtn.forEach((number) => {
   number.addEventListener("click", numberHandler.bind(this, number.innerHTML));
});
sumBtn.addEventListener("click", sumHandler);
subtractBtn.addEventListener("click", subtractHandler);
multipleBtn.addEventListener("click", multipleHandler);
divideBtn.addEventListener("click" , divideHandler);
clearBtn.addEventListener("click" , cleanResult); 