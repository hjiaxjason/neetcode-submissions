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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (head === null || head.next === null) {
            return false;
        }

        let first = head;
        let second = head;

        while (second !== null && second.next !== null) {
            first = first.next;
            second = second.next.next; 

            if (first === second) {
                return true;
            }
        }
        return false;
    }
}
