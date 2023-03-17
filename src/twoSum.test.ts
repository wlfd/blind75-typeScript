import { twoSum } from './twoSum';

describe('twoSum', () => {
	let nums: number[];
	let target: number;

	test('returns the indices of two numbers that add up to the target', () => {
		nums = [2, 7, 11, 15];
		target = 9;
		expect(twoSum(nums, target)).toEqual([0, 1]);

		nums = [3, 2, 4];
		target = 6;
		expect(twoSum(nums, target)).toEqual([1, 2]);

		nums = [3, 3];
		target = 6;
		expect(twoSum(nums, target)).toEqual([0, 1]);
	});

	test('throws an error if no solution is found', () => {
		nums = [2, 7, 11, 15];
		target = 10;
		expect(() => twoSum(nums, target)).toThrowError('No two sum solution');
	});
});
