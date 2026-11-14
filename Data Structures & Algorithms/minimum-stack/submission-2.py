class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
        self.count = 0

    def push(self, val: int) -> None:
        self.stack.append(val)
        min_item = min(val, self.getMin()) if self.min_stack else val
        self.min_stack.append(min_item)
        self.count += 1

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()
        self.count -= 1

    def top(self) -> int:
        return self.stack[self.count-1]

    def getMin(self) -> int:
        return self.min_stack[self.count-1]
        
