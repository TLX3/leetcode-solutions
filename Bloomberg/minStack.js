class MinStack {
  constructor() {
    this.stack = [];
    this.mins = [];
  }

  pop() {
    this.mins.pop();
    this.stack.pop();
  }

  push(x) {
    this.stack.push(x);
    if (this.mins.length >= 1) {
      let last = this.mins[this.mins.length - 1];
      if (x < last) {
        this.mins.push(x);
      } else {
        this.mins.push(last);
      }
    } else {
      this.mins.push(x);
    }
  }
  
  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.mins[this.mins.length - 1];
  }
}