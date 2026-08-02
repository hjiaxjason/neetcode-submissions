class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length === 0) {
            return "";
        }
        
        const tFreqs = new Map<string, number>;
        const window = new Map<string, number>;

        for (let i = 0; i < t.length; i++) {
            tFreqs.set(t[i], (tFreqs.get(t[i]) || 0) + 1);
        }
        let need: number = tFreqs.size;

        let result: number[] = [-1, -1];
        let resLen: number = Infinity;

        let have: number = 0;
        let left: number = 0;
        for (let right = 0; right < s.length; right++) {
            // Update frequency
            window.set(s[right], (window.get(s[right]) || 0) + 1);
                
            // Increment have if counts match
            if (tFreqs.has(s[right]) && window.get(s[right]) === tFreqs.get(s[right])) {
                have++;
            }
            
            // Try to find a shorter valid substring
            while (have === need) {
                if (right-left+1 < resLen) {
                    result = [left, right];
                    resLen = right-left+1;
                }

                // Update frequency to count to reflect accordingly
                window.set(s[left], window.get(s[left]) - 1);
                    
                // Update have if no longer valid
                if (tFreqs.has(s[left]) && window.get(s[left]) < tFreqs.get(s[left])) {
                    have--;
                }

                // Shrink window
                left++;
            }
        }

        return s.slice(result[0], result[1]+1);
    }
}
