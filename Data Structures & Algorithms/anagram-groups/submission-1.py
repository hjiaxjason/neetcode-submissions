from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ana_map = {}

        for s in strs:
            char_list = [0] * 26
            for c in s:
                char_list[ord(c)-97] += 1
            
            char_str = "".join(chr(num) for num in char_list)
            if char_str not in ana_map:
                ana_map[char_str] = []

            ana_map[char_str].append(s)

        return list(ana_map.values())


        