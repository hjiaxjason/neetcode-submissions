class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s: string, k: number): number {
        const freq = new Map<string, number>;

        let result: number = 0;
        let maxF: number = 0;
        let left: number = 0;
        for (let right = 0; right < s.length; right++) {
            // Update freq map
            freq.set(s[right], (freq.get(s[right]) || 0) + 1);
            maxF = Math.max(freq.get(s[right])!, maxF);

            while ((right-left+1)-maxF > k) {
                freq.set(s[left], freq.get(s[left])!-1);
                left++;
            }

            result = Math.max((right-left+1), result)
        }

        return result;
    }
}
