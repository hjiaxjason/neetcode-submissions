class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    dfs(i: number, nums: number[], memo: Map<number, boolean>): boolean {
        if (memo.has(i)) return memo.get(i);
        if (i == nums.length - 1) return true;
        if (nums[i] == 0) return false;

        const end: number = Math.min(nums.length, i + nums[i] + 1);
        for (let j: number = i+1; j < end; j++) {
            if (this.dfs(j, nums, memo)) {
                memo.set(i, true);
                return true;
            }
        }
        memo.set(i, false);
        return false;
    }

    canJump(nums: number[]): boolean {
        const memo = new Map<number, boolean>();
        return this.dfs(0, nums, memo);
    }
}
