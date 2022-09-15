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

  insertInPosition(head, val, position) {
    const node = new Node(val);
    let count = 0;
    let prev = null;
    let current = head;

    while (count < position && current) {
      prev = current;
      current = current.next;
      count++;
    }

    if (prev) {
      prev.next = newNode;
      newNode.next = current;
    }

    return head;
  }

  deleteMiddileNode(head) {
    let count = 0;
    while (head != null) {
      head = head.next;
      count += 1;
    }

    // Base cases
    if (head == null) return null;
    if (head.next == null) {
      return null;
    }
    var copyHead = head;

    // Find the count of nodes
    count = countOfNodes(head);

    // Find the middle node
    var mid = parseInt(count / 2);

    // Delete the middle node
    while (mid-- > 1) {
      head = head.next;
    }

    // Delete the middle node
    head.next = head.next.next;

    return copyHead;
  }
}
module.exports = LinkedList;
