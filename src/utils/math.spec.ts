import { describe, expect, it } from "vitest";
import { add, subtract } from "./math";

describe("Math utils", () => {
	it("should sum two numbers", () => {
		expect(add(1, 1)).toBe(2);
	});
	it("should sum two decimal numbers", () => {
		expect(add(1.51, 1.61)).toBe(3.12);
	});
	it("should throw error if numbers are not numbers", () => {
		// @ts-expect-error
		expect(() => add(1.51, "1.61")).toThrowError("Invalid Number");
		// @ts-expect-error
		expect(() => add("1.61", 1.51)).toThrowError("Invalid Number");
	});

	it("should subtract two numbers", () => {
		expect(subtract(4, 2)).toBe(2);
	});
	it("should subtract two numbers and output a negative value", () => {
		expect(subtract(2, 4)).toBe(-2);
	});
	it("should throw error if numbers are not numbers", () => {
		// @ts-expect-error
		expect(() => subtract(4, "2")).toThrowError("Invalid Number");
		// @ts-expect-error
		expect(() => subtract("2", 4)).toThrowError("Invalid Number");
	});
});
