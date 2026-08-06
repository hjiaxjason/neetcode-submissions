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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    mergeKLists(lists: ListNode[]): ListNode {
        if (lists === null || lists.length === 0) {
            return null;
        }

        while (lists.length > 1) {
            let mergedLists: ListNode[] = [];

            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2: ListNode | null = null;
                if (i+1 < lists.length) {
                    l2 = lists[i+1];
                }
                mergedLists.push(this.mergeTwoLists(l1, l2));
            }
            lists = mergedLists;
        }

        return lists[0];
    }

    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy: ListNode = new ListNode(null, null);
        let head = dummy;
        let tail = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        if (list1) {
            tail.next = list1;
        } else if (list2) {
            tail.next = list2;
        }

        return head.next;
    }
}
