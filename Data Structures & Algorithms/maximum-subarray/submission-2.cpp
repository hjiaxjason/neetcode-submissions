class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int curSum = nums[0];
        int maxSum = nums[0];
        int i = 1;

        while (i < nums.size()) {
            curSum = std::max(curSum + nums[i], nums[i]);
            maxSum = std::max(maxSum, curSum);
            i++;
        }

        return maxSum;
    }
};
