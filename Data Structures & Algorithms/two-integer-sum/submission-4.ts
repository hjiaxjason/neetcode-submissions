class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let result: number[] = [];

        const idxmap = new Map<number, number>;
        for (let i = 0; i < nums.length; i++) {
            idxmap.set(i, nums[i]);
        }

        const mapVals: number[] = Array.from(idxmap.values());
        const mapKeys: number[] = Array.from(idxmap.keys());

        for (let i = 0; i < nums.length; i++) {
            let remaining: number = target-nums[i];
  
            if (mapVals.includes(remaining)) {
                const remainingIdx: number | undefined = mapKeys.find(key => key != i && idxmap.get(key) === remaining);

                if (remainingIdx) {
                    if (i < remainingIdx) {
                        result.push(i);
                        result.push(remainingIdx);
                        return result;
                    } else {
                        result.push(remainingIdx);
                        result.push(i);
                        return result;
                    }
                }
            }
            
        }

        return result;
    }
}
