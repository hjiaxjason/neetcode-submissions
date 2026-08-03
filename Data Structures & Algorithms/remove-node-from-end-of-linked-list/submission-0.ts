/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (head === null) {
            return null;
        }

        let node = head;
        let length = 0;
        for (;node != null; node=node.next, length++) {}

        const fromStart: number = length-n;

        if (fromStart === 0) {
            let next = head.next;
            head.next = null;
            return next;
        }

        let prev = head;
        let curr = head.next;
        let idx: number = 1;
        for (;curr != null; idx++, prev=prev.next, curr=curr.next) {
            if (idx === fromStart) {
                let next = curr.next;
                prev.next = next;
                curr.next = null;
                break;
            }
        }
        return head;
    }
}
