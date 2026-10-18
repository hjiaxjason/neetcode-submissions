class Solution:
    def rob(self, nums: List[int]) -> int:
        memo = {}
        def dfs(i: int):
            if i >= len(nums):
                return 0

            if i in memo:
                return memo.get(i)

            memo[i] = max(nums[i] + dfs(i + 2), dfs(i + 1))
            return memo.get(i)
        
        return dfs(0)

        


        
        