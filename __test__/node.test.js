"use strict";

const Node = require("../node");

describe("testing node class", () => {
  it("test creat new node", () => {
    const val = "first";
    const node = new Node(val);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual("first");
    expect(node.next).toBeNull();
  });
});
