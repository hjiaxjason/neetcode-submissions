class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) { return false; }

        const freqs = new Map<string, number>;
        const freqt = new Map<string, number>;

        for (const char of s) {
            if (freqs.has(char)) {
                freqs.set(char, freqs.get(char)+1);
            } else {
                freqs.set(char, 1);
            }
        }

        for (const char of t) {
            if (freqt.has(char)) {
                freqt.set(char, freqt.get(char)+1);
            } else {
                freqt.set(char, 1);
            }
        }


        for (const char of s) {
            if (freqs.get(char) != freqt.get(char)) {
                return false;
            }
        }
    

        return true;
    }
}
