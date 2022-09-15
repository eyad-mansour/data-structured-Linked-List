"use strict";
const LinkedList = require("../ll");

describe("testing linked list", () => {
  it("test creating lkniked list", () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head).toBeNull();
  });
});

describe("testing insirting in ll", () => {
  it("inserting to empty ll", () => {
    const ll = new LinkedList();
    ll.insert("first");
    expect(ll.head.value).toEqual("first");
    expect(ll.head.next).toBeNull();
  });

  it("inserting in more then one node", () => {
    const ll = new LinkedList();
    ll.insert("first");
    ll.insert("second");
    expect(ll.head.value).toEqual("second");
    expect(ll.head.next.value).toEqual("first");
    expect(ll.head.next.next).toBeNull();
  });
});

describe("append to the end of the linked list", () => {
  it("append to empty linked list", () => {
    const ll = new LinkedList();
    ll.append("first");
    expect(ll.head.value).toEqual("first");
    expect(ll.head.next).toBeNull();
  });
  it("append to non-empty linked list", () => {
    const ll = new LinkedList();
    ll.append("first");
    ll.append("second");
    ll.append("third");
    expect(ll.head.value).toEqual("first");
    expect(ll.head.next.value).toEqual("second");
    expect(ll.head.next.next.value).toEqual("third");
    expect(ll.head.next.next.next).toBeNull();
  });
});

// describe("insert to sepecific location in the linked list", () => {
//   it("insert to sepecific location in the linked list", () => {
//     const ll = new LinkedList();
//     ll.insert("random");
//     expect(ll.head.next).toEqual("random");
//   });
// });

describe("delete the middiel in the linked list", () => {
  it("delet test", () => {});
});
