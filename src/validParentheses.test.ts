import { isValid } from './validParentheses';

describe('isValid', () => {
	test(' returns true for valid parentheses', () => {
		expect(isValid('()')).toBe(true);
		expect(isValid('()[]{}')).toBe(true);
		expect(isValid('{[]}')).toBe(true);
		expect(isValid('({[]})')).toBe(true);
	});
	test('returns false for invalid parentheses', () => {
		expect(isValid('(]')).toBe(false);
		expect(isValid('([)]')).toBe(false);
		expect(isValid('([)]')).toBe(false);
		expect(isValid(']')).toBe(false);
	});
});
