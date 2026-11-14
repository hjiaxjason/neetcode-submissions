class MinStack:
    def __init__(self):
        self.stack = []
        self.extra_stack = []
        self.count = 0

    def push(self, val: int) -> None:
        self.stack.append(val)
        min_item = min(val, self.getMin()) if self.extra_stack else val
        self.extra_stack.append(min_item)
        self.count += 1

    def pop(self) -> None:
        self.stack.pop()
        self.extra_stack.pop()
        self.count -= 1

    def top(self) -> int:
        return self.stack[self.count-1]

    def getMin(self) -> int:
        return self.extra_stack[self.count-1]
        
