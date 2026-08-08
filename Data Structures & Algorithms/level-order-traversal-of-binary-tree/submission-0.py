# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        result = []

        q = deque()
        q.append(root)

        while q:
            qLen = len(q)
            level = []
            for i in range(qLen):
                popped = q.popleft()
                if popped:
                    level.append(popped.val)

                    if popped.left:
                        q.append(popped.left)
                    if popped.right:
                        q.append(popped.right)

            result.append(level)
        
        return result


        




        