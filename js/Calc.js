//===CALC===//

// Calculator
function Calc(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;
}

// add addition
Calc.prototype.addition = function() {
	return this.num1 + this.num2;
}

// add difference
Calc.prototype.difference = function() {
	return this.num1 - this.num2;
}

// add product
Calc.prototype.product = function() {
	return this.num1 * this.num2;
}

// add division
Calc.prototype.division = function() {
	if(this.num2 === 0)
		return false;

	return this.num1 / this.num2;
}

// add remainder || module
Calc.prototype.remainder = function() {
	if(this.num2 === 0)
		return false;

	return this.num1 % this.num2;
}

// add power
Calc.prototype.power = function() {
	return this.num1 ** this.num2;
}

// add num1 setter
Calc.prototype.setNum1 = function(newNum) {
	this.num1 = newNum;
}

// add num2 setter
Calc.prototype.setNum2 = function(newNum) {
	this.num2 = newNum;
}

// main function
const calculate = () => {
	let number1 = parseFloat(num1.value, 10);
	let number2 = parseFloat(num2.value, 10);
	let calcOperator = operator.value;

	const newCalc = new Calc();

	newCalc.setNum1(number1);
	newCalc.setNum2(number2);
	let resultNum;

	switch (calcOperator) {
		case '+':
			resultNum = newCalc.addition();
			break;
		case '-':
			resultNum = newCalc.difference();
			break;
		case '*':
			resultNum = newCalc.product();
			break;
		case '/':
			resultNum = newCalc.division();
			break;
		case '%':
			resultNum = newCalc.remainder();
			break;
		case '**':
			resultNum = newCalc.power();
			break;
	}
	if(Boolean(number1) && Boolean(number2) && Boolean(calcOperator)){
		if(number2 < 0) {
			number2 = `(${number2})`;
		}
		statement.textContent = `${number1}${calcOperator}${number2}=${resultNum}`;
	}
};

export default Calc;
export { calculate }