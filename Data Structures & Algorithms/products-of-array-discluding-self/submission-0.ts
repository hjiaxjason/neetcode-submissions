class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // nums = [1, 2, 4, 6]
        // prefix = [1, 1, 2, 8] prefix[0] = 1 
        // prefix[1] = prefix[0] * nums[0]
        // prefix[2] = prefix[1] * nums[1]
        // prefix[3] = prefix[2] * nums[2]
        const prefixProds: number[] = Array(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            prefixProds[i] = nums[i-1]*prefixProds[i-1];
        }

        // nums = [1, 2, 4, 6]
        // suffix = [48, 24, 6, 1]
        // suffix[2] = suffix[3] * nums[3]
        // suffix[1] = suffix[2] * nums[2]
        // suffix[0] = suffix[1] * nums[1]
        const suffixProds: number[] = Array(nums.length).fill(1);
        for (let i = nums.length - 1; i > 0; i--) {
            suffixProds[i-1] = nums[i]*suffixProds[i];
        }

        const result: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            result.push(prefixProds[i]*suffixProds[i]);
        }

        return result;
    }
}
