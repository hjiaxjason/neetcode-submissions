class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        freqs = {}
        most_freq = 0
        result = 0
        l = 0
        for r in range(len(s)):
            if s[r] not in freqs:
                freqs[s[r]] = 0
            freqs[s[r]] += 1

            most_freq = max(max(freqs.values()), most_freq)

            while (r-l+1)-most_freq > k:
                freqs[s[l]] -= 1
                l += 1

            window_len = r-l+1
            
            result = max(result, window_len)
                    
        
        return result




        