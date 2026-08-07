class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)

        starts = []
        for num in nums_set:
            if num-1 not in nums_set:
                starts.append(num)

        result = 0
        for num in nums:
            if num in starts:
                i = num
                while i in nums_set:
                    i += 1

                if i-num > result:
                    result = i-num
        
        return result
                



        
        