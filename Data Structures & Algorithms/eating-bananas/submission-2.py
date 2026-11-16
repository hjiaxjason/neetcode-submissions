class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        res = max(piles)
        l, r = 1, res
        while l <= r:
            mid = (l+r)//2

            pile_h = 0
            for pile in piles:
                pile_h += -(-pile//mid)
            
            if pile_h <= h: res = mid

            if pile_h > h: l = mid+1
            else: r = mid-1
        
        return res
