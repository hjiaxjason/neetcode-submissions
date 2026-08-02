class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = new Array<string>;
        const closeToOpen = new Map<string, string>([ 
            ["]", "["], 
            [")", "("], 
            ["}", "{"],
        ]);

        for (const c of s) {
            if (closeToOpen.has(c)) {
                if (stack.length !== 0 && stack.at(-1) === closeToOpen.get(c)) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
