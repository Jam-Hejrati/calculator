numberBtn.forEach((number) => {
   number.addEventListener("click", () => {
    let currentNum = "";
    currentNum += number.innerHTML;
    resultViewer.innerHTML += currentNum;
   });
});
