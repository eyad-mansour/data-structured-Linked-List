"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
}
module.exports = LinkedList;
