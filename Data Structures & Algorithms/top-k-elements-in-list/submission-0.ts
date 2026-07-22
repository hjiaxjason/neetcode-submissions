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

        const sortedFreqMap = new Map(
            [...freqMap.entries()].sort((a, b) => b[1] - a[1])
        );

        let count: number = 0;
        let result: number[] = [];
        for (const entry of sortedFreqMap.entries()) {
            if (count === k) { break; }
            result.push(Number(entry[0]));
            count++;
        }

        return result;
    }
}
