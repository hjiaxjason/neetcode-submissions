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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (list1 === null && list2 === null) {
            return null;
        } else if (list1 === null) {
            return list2;
        } else if (list2 === null) {
            return list1;
        }

        let head: ListNode | null = null;
        if (list1.val < list2.val) {
            head = list1;
            head.next = this.mergeTwoLists(list1.next, list2);
        } else {
            head = list2;
            head.next = this.mergeTwoLists(list2.next, list1);
        }

        return head;
    }
}
