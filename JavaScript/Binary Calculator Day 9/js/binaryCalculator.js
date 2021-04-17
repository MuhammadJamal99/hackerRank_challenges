const btnsContainer = document.getElementById("btns");
const res = document.getElementById("res");
let operator = '';
let ids = ["btn0","btn1","btnClr","btnEql","btnSum","btnSub","btnMul","btnDiv"],
    innerValues = ["0","1","C","=","+","-","*","/"],
    finalBtns = ``;

for (let i = 0; i < ids.length; i++) {
    finalBtns += `<div class="btn" id=${ids[i]}>${innerValues[i]}</div>`;
}
btnsContainer.innerHTML = finalBtns;

window.onload = () => {
    const btn0 = document.getElementById('btn0');
    const btn1 = document.getElementById('btn1');
    const btnSum = document.getElementById('btnSum');
    const btnSub = document.getElementById('btnSub');
    const btnMul = document.getElementById('btnMul');
    const btnDiv = document.getElementById('btnDiv');
    const btnClr = document.getElementById('btnClr');
    const btnEql = document.getElementById('btnEql');
    let inputs = [];
    let operator = '';
    const displayRes = () => {
        let val1 = inputs[0];
        let val2 = inputs[1] === undefined ? '' : inputs[1];
        res.innerText = `${val1}${operator}${val2}`;
    };
    const setOperator = op => {
        if (inputs[1] === undefined) {
            operator = op;
        }
        displayRes();
    };
    const setValues = num => {
        if (inputs.length === 0) {
            inputs[0] = num;
        } else if (inputs.length === 1 && operator.length === 0) {
            inputs[0] += num;
        } else if (inputs.length === 1 && operator.length > 0) {
            inputs[1] = num;
        } else if (inputs.length === 2 && operator.length > 0) {
            inputs[1] += num;
        }
        displayRes();
    };
    btn0.addEventListener('click', () => {
        setValues('0');
    });
    btn1.addEventListener('click', () => {
        setValues('1');
    });
    btnSum.addEventListener('click', () => {
        setOperator('+');
    });
    btnSub.addEventListener('click', () => {
        setOperator('-');
    });
    btnMul.addEventListener('click', () => {
        setOperator('*');
    });
    btnDiv.addEventListener('click', () => {
        setOperator('/');
    });
    btnClr.addEventListener('click', () => {
        inputs = [''];
        operator = '';
        displayRes();
    });
    btnEql.addEventListener('click', () => {
        if (inputs.length === 2 && operator.length > 0) {
            let a = parseInt(inputs[0], 2);
            let b = parseInt(inputs[1], 2);
            switch (operator) {
            case '+':
                inputs = [(a + b).toString(2)];
                break;
            case '-':
                inputs = [(a - b).toString(2)];
                break;
            case '*':
                inputs = [parseInt(a * b, 0).toString(2)];
                break;
            case '/':
                inputs = [parseInt(a / b, 0).toString(2)];
                break;
            }
            operator = '';
            displayRes();
        }
    });
};

