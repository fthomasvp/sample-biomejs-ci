import { describe, expect, it } from "vitest";
import { add, subtract } from "./math";

describe("Math utils", () => {
	it("should sum two numbers", () => {
		expect(add(1, 1)).toBe(2);
	});
	it("should sum two decimal numbers", () => {
		expect(add(1.51, 1.61)).toBe(3.12);
	});

	it("should subtract two numbers", () => {
		expect(subtract(4, 2)).toBe(2);
	});
	it("should subtract two numbers and output a negative value", () => {
		expect(subtract(2, 4)).toBe(-2);
	});
});
