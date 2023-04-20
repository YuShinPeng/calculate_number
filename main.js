//找節點
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");
const button = document.querySelector("#button");

button.addEventListener("click",function(i){
    let input1 = +num1.value;
    let input2 = +num2.value;
    let total = +result;
    total = input1 + input2;
    result.innerHTML = `${total}`;

    input1 = null;
    input2 = null;

})