import Calc, { calculate } from './Calc.js';

try {
	num1.addEventListener('change', calculate);
	num2.addEventListener('change', calculate);
	operator.addEventListener('change', calculate);
} catch(e) {
	console.log(e);
}

//===END CALC===//


//===NEW ARRAY PROTOTYPE===//
const numbers = [12, 10, 51, 6848, 984, 89, 13];

Array.prototype.shuffle = function() {
	const copy = [...this];

	return copy.sort(() => Math.random() - 0.5);
}

console.log(numbers.shuffle());

