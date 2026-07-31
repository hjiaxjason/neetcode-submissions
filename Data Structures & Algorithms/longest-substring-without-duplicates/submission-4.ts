class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        const charSet = new Set<string>;
        let result: number = 0;

        let left: number = 0;
        for (let right = 0; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);

            if (right-left+1 > result) {
                result = right-left+1;
            }
        } 

        return result;
    }
}
