
public class CustomStack {

    private static final int STACK_IS_EMPTY = -1;
    private final int[] stack;
    private final int maxSize;
    private int topIndex;

    public CustomStack(int maxSize) {
        stack = new int[maxSize];
        this.maxSize = maxSize;
        topIndex = STACK_IS_EMPTY;
    }

    public void push(int value) {
        if (topIndex + 1 < maxSize) {
            stack[++topIndex] = value;
        }
    }

    public int pop() {
        return topIndex != STACK_IS_EMPTY ? stack[topIndex--] : STACK_IS_EMPTY;
    }

    public void increment(int totalElementsToIncrementAtBottom, int value) {
        totalElementsToIncrementAtBottom = Math.min(totalElementsToIncrementAtBottom, topIndex + 1);
        for (int i = 0; i < totalElementsToIncrementAtBottom; ++i) {
            stack[i] += value;
        }
    }
}
