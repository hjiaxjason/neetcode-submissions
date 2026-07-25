class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a-b);

        const triplets: number[][] = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) { break; }

            if (i > 0 && nums[i] === nums[i-1]) {
                continue;
            }

            const target: number = nums[i] * -1;
            
            let left: number = i+1;
            let right: number = nums.length-1;
            while (left < right) {
                const sum: number = nums[left]+nums[right];
                if (sum === target) {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    // Skip duplicates for second element
                    while (nums[left] === nums[left-1] && left < right) {
                        left++;
                    }

                    // Skip duplicates for third element
                    while (nums[right] === nums[right+1] && left < right) {
                        right--;
                    }

                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }    
        }

        return triplets;
    }
}
