class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        sorted_intervals = sorted(intervals, key = lambda x: x[0])

        result = [sorted_intervals[0]]
        for i in range(1, len(sorted_intervals)):
            prev = result[-1]
            curr = sorted_intervals[i]

            if prev[1] >= curr[0]:
                result[-1] = [prev[0], max(prev[1], curr[1])]
            else:
                result.append(sorted_intervals[i])
        
        return result
        