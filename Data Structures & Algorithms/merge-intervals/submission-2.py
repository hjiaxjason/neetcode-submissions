class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda x: x[0])

        result = [intervals[0]]
        for i in range(1, len(intervals)):
            prev = result[-1]
            curr = intervals[i]

            if prev[1] >= curr[0]:
                result[-1] = [prev[0], max(prev[1], curr[1])]
            else:
                result.append(intervals[i])
        
        return result
        