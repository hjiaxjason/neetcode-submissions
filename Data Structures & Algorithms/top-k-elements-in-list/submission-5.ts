class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqs = new Map<number, number>();
        for (const num of nums) {
            if (!freqs.has(num)) {
                freqs.set(num, 1);
                continue;
            }
            freqs.set(num, freqs.get(num)+1)
        }

        const groups: number[][]= Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of freqs.entries()) {
            groups[freq].push(num);
        }

        const result: number[] = [];
        for (let i = nums.length; i >= 0; i--) {
            for (const n of groups[i]) {
                result.push(n);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
