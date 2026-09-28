class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(row, col, word_idx) -> str:
            if word_idx == len(word):
                return True

            if row >= len(board) or row < 0 or col >= len(board[0]) or col < 0 or board[row][col] != word[word_idx]:
                return False

            temp = board[row][col]
            board[row][col] = "#"
            found = (dfs(row, col+1, word_idx+1) or dfs(row, col-1, word_idx+1) or dfs(row+1, col, word_idx+1) or dfs(row-1, col, word_idx+1))
            board[row][col] = temp
            return found

        rows = []
        for i in range(len(board)):
            if word[0] in board[i]:
                rows.append(i)

        for r in rows:
            for c in range(len(board[r])):
                if dfs(r, c, 0):
                    return True
        
        return False

        
        


        

 
            
                    
                


                


        