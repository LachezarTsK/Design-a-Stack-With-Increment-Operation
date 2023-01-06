
class CustomStack {

    /**
     * @param {number} maxSize
     */
    constructor(maxSize) {
        this.STACK_IS_EMPTY = -1;
        this.stack = new Array(maxSize).fill(0);
        this.maxSize = maxSize;
        this.topIndex = this.STACK_IS_EMPTY;
    }

    /** 
     * @param {number} value
     * @return {void}
     */
    push(value) {
        if (this.topIndex + 1 < this.maxSize) {
            this.stack[++this.topIndex] = value;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.topIndex !== this.STACK_IS_EMPTY ? this.stack[this.topIndex--] : this.STACK_IS_EMPTY;
    }

    /** 
     * @param {number} totalElementsToIncrementAtBottom 
     * @param {number} value
     * @return {void}
     */
    increment(totalElementsToIncrementAtBottom, value) {
        totalElementsToIncrementAtBottom = Math.min(totalElementsToIncrementAtBottom, this.topIndex + 1);
        for (let i = 0; i < totalElementsToIncrementAtBottom; ++i) {
            this.stack[i] += value;
        }
    }
}
