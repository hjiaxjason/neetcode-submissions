class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        # Reversing rows
        for i in range(len(matrix)//2):
            temp = matrix[i]
            matrix[i] = matrix[len(matrix)-i-1]
            matrix[len(matrix)-i-1] = temp

        # Transpose rows and columns - first column becomes first row etc.
        start = 1
        for i in range(len(matrix)):
            if start < len(matrix[0]):
                for j in range(start, len(matrix[0])):
                    temp = matrix[i][j]
                    matrix[i][j] = matrix[j][i]
                    matrix[j][i] = temp

            else:
                break

            start += 1
            



        

        