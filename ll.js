"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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

  insertInPosition(val, position) {
    if (position > 0 && position > this.size) {
      return;
    }

    // If first position
    if (position === 0) {
      this.insert(val);
      return;
    }

    const node = new Node(val);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < position) {
      previous = current; // Node before position
      count++;
      current = current.next; // Node after position
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  deleteElement(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
}
module.exports = LinkedList;
