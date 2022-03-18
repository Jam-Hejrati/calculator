let currentInputNum = '';
let currentValue = 0;

const numberHandler = (btnValue) =>{
    currentInputNum += btnValue;
    resultViewer.innerHTML = currentInputNum;
    console.log(currentInputNum);
}

const sumHandler = () =>{
    currentValue += Number(currentInputNum);
    currentInputNum = '';
    resultViewer.innerHTML = currentValue;
}

numberBtn.forEach(number => {
    number.addEventListener('click' , numberHandler.bind(this , number.innerHTML));
})
sumBtn.addEventListener('click' , sumHandler);