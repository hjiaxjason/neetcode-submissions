class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let purchasePrice: number = prices[0];
        let result: number = 0;
        for (let i = 1; i < prices.length; i++) {
            const profit: number = prices[i]-purchasePrice;
            if (profit > result) {
                result = profit;
            }

            if (prices[i] < purchasePrice) {
                purchasePrice = prices[i];
            }
        }

        return result;
    }
}
