class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefixProds = [1]*len(nums)
        for i in range(1, len(nums)):
            prefixProds[i] = prefixProds[i-1]*nums[i-1]

        suffixProds = [1]*len(nums)
        for i in range(len(nums)-1, 0, -1):
            suffixProds[i-1] = suffixProds[i]*nums[i]

        result = []
        for i in range(len(nums)):
            result.append(prefixProds[i]*suffixProds[i])
        
        return result
        