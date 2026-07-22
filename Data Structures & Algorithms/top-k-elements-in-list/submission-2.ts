class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>;
        for (const num of nums) {
            if (!freqMap.has(num)) {
                freqMap.set(num, 1);
                continue;
            }
            freqMap.set(num, freqMap.get(num)+1);
        }

        const groups: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, freq] of freqMap.entries()) {
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
