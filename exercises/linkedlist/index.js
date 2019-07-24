// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    if (next) {
      this.next = next;
    }
    else {
      this.next = null;
    }
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }

  insertFirst(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } 
    else {
      var prev = this.head;
      this.head = new Node(data);
      this.head.next = prev;
    }
  }

  size() {
    var count = 0;
    if (this.head === null) {
      return count;
    }
    var current = this.head; 
    count++;
    while (current.next) {
      current = current.next;
      count++;
    }
    return count;
  }

  getFirst() {
    if (this.head === null) {
      return null;
    }
    return this.head;
  }

  getLast() {
    if (this.head === null) {
      return null;
    }
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current; 
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    } 
    var first = this.head;
    var second = first.next;
    first.next = null; 
    this.head = second; 
  }

  removeLast() {
    if (this.head === null) {
      return null;
    }
    else if (this.size() === 1) {
      this.head = null;
    }
    else {
      var current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  }

  insertLast(data) {
    if (this.head === null) {
      this.insertFirst(data);
    }
    var current = this.head;
    while (current.next) {
      current = current.next; 
    }
    current.next = new Node(data);
  }

}

module.exports = { Node, LinkedList };
