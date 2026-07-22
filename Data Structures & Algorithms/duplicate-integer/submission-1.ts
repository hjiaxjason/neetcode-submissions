class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numbersSet = new Set(nums);
        return numbersSet.size != nums.length;
    }
}
