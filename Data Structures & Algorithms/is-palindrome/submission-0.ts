class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const lowerS: string = s.toLowerCase();
        let left: number = 0;
        let right: number = lowerS.length-1; 

        const isAlphaNum = (char) => /^[a-zA-Z0-9]$/.test(char);
        while (left < right) {
            if (!isAlphaNum(lowerS[left])) {
                left++;
                continue;
            }

            if (!isAlphaNum(lowerS[right])) {
                right--;
                continue;
            }

      
            if (lowerS[left] !== lowerS[right]) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
}
