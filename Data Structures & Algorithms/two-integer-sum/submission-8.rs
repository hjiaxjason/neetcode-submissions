use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut idxmap: HashMap<i32, usize> = HashMap::new();

        for (i, &num) in nums.iter().enumerate() {
            let remaining = target-num;

            if let Some(&prev_idx) = idxmap.get(&remaining) {
                return vec![prev_idx as i32, i as i32];
            }

            idxmap.insert(num, i);
        }

        vec![]
    }
}
