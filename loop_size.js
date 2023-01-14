// Can you get the loop ?

// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

// For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next
// Notes:

// do NOT mutate the nodes!
// in some cases there may be only a loop, with no dangling piece
// Thanks to shadchnev, I broke all of the methods from the Hash class.

// Don't miss dmitry's article in the discussion after you pass the Kata !!


function loop_size(node){

  let cur = node;
  let i = 1;
  const map = new Map();

  while (true) {
    if (map.has(cur)) {
      return i - map.get(cur);
    };

    map.set(cur, i);
    cur = cur.next;
    i++;
  }
}


// const assert = require('chai').assert;

// describe('sample tests', function () {
// 	it('should work for some small lists', function () {
// 		{
// 			const A = new Node();
// 			A.setNext(A);
// 			assert.deepEqual(loop_size(A), 1);
// 		}
// 		{
// 			const A = new Node(), B = new Node();
// 			A.setNext(B), B.setNext(A);
// 			assert.deepEqual(loop_size(A), 2);
// 		}
// 		{
// 			const A = new Node(), B = new Node();
// 			A.setNext(B), B.setNext(B);
// 			assert.deepEqual(loop_size(A), 1);
// 		}
// 		{
// 			const A = new Node(), B = new Node(), C = new Node();
// 			A.setNext(B), B.setNext(C), C.setNext(C);
// 			assert.deepEqual(loop_size(A), 1);
// 		}
// 		{
// 			const A = new Node(), B = new Node(), C = new Node();
// 			A.setNext(B), B.setNext(C), C.setNext(B);
// 			assert.deepEqual(loop_size(A), 2);
// 		}
// 		{
// 			const A = new Node(), B = new Node(), C = new Node();
// 			A.setNext(B), B.setNext(C), C.setNext(A);
// 			assert.deepEqual(loop_size(A), 3);
// 		}
// 	});
// });
