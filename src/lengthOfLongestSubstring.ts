function lengthOfLongestSubstring(s: string): number {
	let maxLength = 0;
	let left = 0;
	const charIndexMap: Record<string, number> = {};
	for (let right = 0; right < s.length; right++) {
		const char = s[right];
		if (charIndexMap[char] !== undefined && charIndexMap[char] >= left) {
			left = charIndexMap[char] + 1;
		}
		charIndexMap[char] = right;
		maxLength = Math.max(maxLength, right - left + 1);
	}
	return maxLength;
}

export { lengthOfLongestSubstring };
