import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
	test('returns the length of the longest substring without repeating characters', () => {
		expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
		expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
		expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
		expect(lengthOfLongestSubstring('')).toBe(0);
		expect(lengthOfLongestSubstring('a')).toBe(1);
		expect(lengthOfLongestSubstring('ab')).toBe(2);
		expect(lengthOfLongestSubstring('aa')).toBe(1);
		expect(lengthOfLongestSubstring('abba')).toBe(2);
		expect(lengthOfLongestSubstring('abcde')).toBe(5);
		expect(lengthOfLongestSubstring('aab')).toBe(2);
		expect(lengthOfLongestSubstring('abb')).toBe(2);
		expect(lengthOfLongestSubstring('abcbda')).toBe(4);
		expect(lengthOfLongestSubstring('abcabcbbdefghijklmn')).toBe(12);
		expect(lengthOfLongestSubstring('abcabcbbdefghijklmnopqrstuvwxyz')).toBe(
			24
		);
	});
});
