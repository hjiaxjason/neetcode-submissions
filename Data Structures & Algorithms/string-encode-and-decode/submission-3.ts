class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) {
            return "-1,#";
        }

        const lengths: number[] = [];
        for (const str of strs) {
            lengths.push(str.length);
        }

        const joinedLengths: string = lengths.join(",");
        const joinedStrs: string = strs.join("");


        return joinedLengths.concat(",#", joinedStrs);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "-1,#") {
            return [];

        }

        const separatorIndex = str.indexOf(",#");
        const lengthsStr = str.substring(0, separatorIndex);
        const lengths: number[] = lengthsStr.split(",").map(Number);
        let i = separatorIndex + 2;

        const res: string[] = [];
        for (let j = 0; j < lengths.length; j++) {
            res.push(str.substring(i, i + lengths[j]));
            i += lengths[j];
        }

        return res;
    }
}
