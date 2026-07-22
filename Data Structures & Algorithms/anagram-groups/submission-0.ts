class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];

        const freqMap = new Map<string, string[]>;
        for (const str of strs) {
            const freqs: number[] = new Array(26).fill(0);
            for (const char of str) {
                freqs[char.charCodeAt(0)-97]++;
            }
            
            const key = freqs.join('#');

            if (!freqMap.has(key)) {
                freqMap.set(key, []);
            }

            freqMap.get(key)!.push(str);
        }

        return Array.from(freqMap.values());
    }
}
