class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0
        buy = prices[0]

        for i in range(1, len(prices)):
            if prices[i]-buy > result:
                result = prices[i]-buy

            if prices[i] < buy:
                buy = prices[i]
        
        return result


        