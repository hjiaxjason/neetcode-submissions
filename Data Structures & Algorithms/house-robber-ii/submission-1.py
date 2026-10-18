class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
            
        memo_1 = {}
        memo_2 = {}

        list_1 = nums[:len(nums)-1]
        list_2 = nums[1:]

        def dfs(i: int, num_list: list[int], memo: dict[int, int]):
            if i >= len(nums)-1:
                return 0
            
            if i in memo:
                return memo[i]
            
            memo[i] = max(num_list[i] + dfs(i+2, num_list, memo), dfs(i+1, num_list, memo))
            return memo[i]
        
        return max(dfs(0, list_1, memo_1), dfs(0, list_2, memo_2))

        