class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        idxmap = {}

        for i in range(len(nums)):
            remaining = target-nums[i]

            if remaining in idxmap:
                return [idxmap[remaining], i]
            
            idxmap[nums[i]] = i
        
        return []
        
        