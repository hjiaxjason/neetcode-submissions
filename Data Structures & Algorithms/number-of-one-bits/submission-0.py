class Solution:
    def hammingWeight(self, n: int) -> int:
        result = 0
        while n != 0:
            remainder = n % 2
            if remainder == 1:
                result += 1
            n = n // 2
        
        return result

        



        