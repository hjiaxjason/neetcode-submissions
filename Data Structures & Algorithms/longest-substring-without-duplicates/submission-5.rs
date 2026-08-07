use std::cmp;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let chars: Vec<char> = s.chars().collect();
        let mut char_set = HashSet::new();
        let mut left = 0;
        let mut result = 0;
        for right in 0..chars.len() {
            while char_set.contains(&chars[right]) {
                char_set.remove(&chars[left]);
                left += 1;
            }
            char_set.insert(&chars[right]);
            result = cmp::max(result, (right-left+1) as i32);
        }

        result
    }
}
