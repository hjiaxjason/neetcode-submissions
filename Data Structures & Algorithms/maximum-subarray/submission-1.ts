class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let curSum: number = nums[0];
        let maxSum: number = nums[0];
        let i: number = 1;

        while (i < nums.length) {
            curSum = Math.max(curSum + nums[i], nums[i]);
            maxSum = Math.max(maxSum, curSum);
            i += 1;
        }
        
        return maxSum;
    }
}
