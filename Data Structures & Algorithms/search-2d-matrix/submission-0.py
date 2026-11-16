class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for row in matrix:
            if row[0] <= target and target <= row[len(row)-1]:
                if target in row:
                    return True
            else:
                continue
        
        return False
        