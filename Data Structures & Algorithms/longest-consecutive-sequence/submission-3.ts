class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const hashSet: Set<number> = new Set(nums);

        const starts: number[] = [];
        for (const num of hashSet) {
            if (!hashSet.has(num-1)) {
                starts.push(num);
            }
        }

        let i: number = 1;
        let longest: number = 0;
        for (const start of starts) {
            while (hashSet.has(start+i)) {
                i++;
            }
            
            if (i > longest) {
                longest = i;
            }

            i = 1;
        }

        return longest;
    }
}
