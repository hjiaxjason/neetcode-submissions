class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = new Array<string>;
        for (const c of s) {
            if (c === "[" || c === "(" || c === "{") {
                stack.push(c);
            }
            else if (c === "]" || c === ")" || c === "}") {
                const top: string = stack.pop();
                switch (c) {
                    case "]":
                        if (top !== "[") {
                            return false;
                        }
                        break;
                    case ")":
                        if (top !== "(") {
                            return false;
                        }
                        break;
                    case "}":
                        if (top !== "{") {
                            return false;
                        }
                        break;
                }
            }
        }
        return stack.length === 0;
    }
}
