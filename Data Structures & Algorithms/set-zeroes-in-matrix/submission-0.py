class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        num_rows, num_cols = len(matrix), len(matrix[0])
        rows, cols = [False] * num_rows, [False] * num_cols

        for r in range(num_rows):
            for c in range(num_cols):
                if matrix[r][c] == 0:
                    rows[r] = True
                    cols[c] = True

        for r in range(num_rows):
            for c in range(num_cols):
                if rows[r] or cols[c]:
                    matrix[r][c] = 0


        
        