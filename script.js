btn0.addEventListener(  'click', () => { res.innerHTML += 0 });
btn1.addEventListener(  'click', () => { res.innerHTML += 1 });
btnClr.addEventListener('click', () => { res.innerHTML = '' });
btnSum.addEventListener('click', () => { res.innerHTML += '+'});
btnSub.addEventListener('click', () => { res.innerHTML += '-' });
btnMul.addEventListener('click', () => { res.innerHTML += '*' });
btnDiv.addEventListener('click', () => { res.innerHTML += '/' });
btnEql.addEventListener('click', () => {
    const op = res.innerHTML.match(/\+|-|\*|\//)[0];
    let [operand1, operand2] = res.innerHTML.split(op);
    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    res.innerHTML = eval(operand1 + op + operand2).toString(2);
});
