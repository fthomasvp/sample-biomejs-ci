/**
 * Receive two numbers and perform a sum operation.
 */
export function add(num1: number, num2: number) {
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		throw Error("Invalid Number");
	}

	return num1 + num2;
}

/**
 * Receive two numbers and perform a subtract operation.
 */
export function subtract(num1: number, num2: number) {
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		throw Error("Invalid Number");
	}

	return num1 - num2;
}
