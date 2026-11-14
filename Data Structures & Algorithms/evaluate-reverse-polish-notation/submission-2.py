import operator
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        out_stack = []
        ops = {
            "+": operator.add,
            "-": operator.sub,
            "*": operator.mul,
            "/": operator.truediv,   
        }

        for token in tokens:
            if token.isdigit() or token[0] == "-" and token[1:].isdigit():
                out_stack.append(int(token))
            elif token in ops:
                second = out_stack.pop()
                first = out_stack.pop()
                out_stack.append(int(ops[token](first, second)))
        
        return out_stack[0]
