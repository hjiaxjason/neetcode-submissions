class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left: number = 0;
        let right: number = nums.length-1;

        let result: number = nums[0];
        while (left <= right) {
            if (nums[left] < nums[right]) {
                result = Math.min(result, nums[left]);
            }

            const mid: number = Math.floor((left+right)/2);
            result = Math.min(result, nums[mid]);
            if (nums[mid] >= nums[left]) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
        return result;
    }
}
