let Node = (key, val) => {
  this.next = null;
  this.prev = null;
  this.key = key;
  this.value = val;  
};

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.tail = null;
    this.head = null;
    this.usedCapacity = 0;  
  }

  get(key) {
    if (this.map[key]) {
      this.setHead(this.map[key]);
      return this.head.value;
    }
    return -1;
  };

  setHead(node) {
    // make head
    if (this.head !== node) {    
      if (node.prev && node.next) {
        node.prev.next = node.next;
        node.next.prev = node.prev;       
      } else if (node.prev) {
        node.prev.next = null;
        this.tail = node.prev;
      }      
      node.next = this.head;
      this.head.prev = node;      
      this.head = node;
      this.head.prev = null;
    }    
  };

  put(key, value) {  
    if (this.map[key]) {
      this.map[key].value = value;
      this.setHead(this.map[key]);
    } else {
      // ensure capacity
      if (this.usedCapacity === this.capacity) {
        // find linked list tail
        this.tail.prev && (this.tail.prev.next = null);
        // remove object reference from hash
        delete this.map[this.tail.key];
        // remove tail
        this.tail = this.tail.prev;
        this.usedCapacity--;
      }
      // insert new node
      let node = new Node(key, value);
      this.map[key] = node;
      if (this.head) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
      }
      if (!this.tail) {
        this.tail = node;
      }
      this.usedCapacity++;  
    }
  }

};