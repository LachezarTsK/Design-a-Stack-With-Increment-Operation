
#include <vector>
#include <algorithm>
using namespace std;

class CustomStack {
    
    static const size_t STACK_IS_EMPTY = variant_npos;
    size_t topIndex = STACK_IS_EMPTY;
    vector<int> stack;
    const int maxSize;

public:
    explicit CustomStack(int maxSize) : maxSize(maxSize) {
        stack.resize(maxSize);
    }

    void push(int value) {
        if (topIndex == STACK_IS_EMPTY || topIndex + 1 < maxSize) {
            stack[++topIndex] = value;
        }
    }

    int pop() {
        return topIndex != STACK_IS_EMPTY ? stack[topIndex--] : STACK_IS_EMPTY;
    }

    void increment(size_t totalElementsToIncrementAtBottom, int value) {
        totalElementsToIncrementAtBottom = min(totalElementsToIncrementAtBottom, topIndex + 1);
        for (int i = 0; i < totalElementsToIncrementAtBottom; ++i) {
            stack[i] += value;
        }
    }
};
