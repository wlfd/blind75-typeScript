function isValid(s: string): boolean {
	const stack: string[] = [];

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char === '(' || char === '{' || char === '[') {
			stack.push(char);
		} else {
			const top = stack.pop();

			if (
				(top !== '(' && char === ')') ||
				(top !== '{' && char === '}') ||
				(top !== '[' && char === ']')
			) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

export { isValid };
