class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)

        starts = []
        for num in nums_set:
            if num-1 not in nums_set:
                starts.append(num)

        result = 0
        for start in starts:
            num = start
            while num in nums_set:
                num += 1
            
            if num-start > result:
                result = num-start


        
        return result
                



        
        