class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur_sum = nums[0]
        max_sum = nums[0]
        i = 1

        while i < len(nums):
            cur_sum = max(cur_sum + nums[i], nums[i])
            
            max_sum = max(cur_sum, max_sum)
            i += 1
        
        return max_sum

        
        