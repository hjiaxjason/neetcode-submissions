class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        // Map<num, idx>
        const idxmap = new Map<number, number>;

        for (let i = 0; i < nums.length; i++) {
            let remaining: number = target-nums[i];
  
            if (idxmap.has(remaining)) {
                return [idxmap.get(remaining), i]
            }
            idxmap.set(nums[i], i);
        }

        return
    }
}
