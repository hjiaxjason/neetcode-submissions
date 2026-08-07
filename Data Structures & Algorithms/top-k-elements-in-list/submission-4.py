class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqs = {}
        for num in nums:
            if num not in freqs:
                freqs[num] = 1
            else:
                freqs[num] += 1

        sortedNums = sorted(freqs.items(), key=lambda x: x[1], reverse=True)

        result = []
        for i in range(k):
            result.append(sortedNums[i][0])

        return result
        