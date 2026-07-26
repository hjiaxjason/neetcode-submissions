class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left: number = 0;
        let right: number = heights.length - 1;

        let result: number = 0;
        while (left < right) {
            const area: number = (right-left)*Math.min(heights[right], heights[left]);
            if (area > result) {
                result = area;
            }

            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    }
}
