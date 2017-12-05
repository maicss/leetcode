
function ListNode() {

    function Node (ele) {
        this.val = ele;
        this.next = null;
    }


    let length = 0;
    this.head = null;

    this.append = function (element) {

        let node = new Node(element),
            current;

        if (this.head === null) { //first node on list
            this.head = node;
        } else {

            current = this.head;

            //loop the list until find last item
            while (current.next) {
                current = current.next;
            }

            //get last item and assign next to added item to make the link
            current.next = node;
        }

        length++; //update size of list
    };

    this.insert = function (position, element) {

        //check for out-of-bounds values
        if (position >= 0 && position <= length) {

            let node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) { //add on first position

                node.next = current;
                head = node;

            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++; //update size of list

            return true;

        } else {
            return false;
        }
    };
    this.indexOf = function (element) {

        let current = head,
            index = 0;

        while (current) {
            if (element === current.val) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return this.head;
    };
}

ListNode.prototype.toString = function () {
    let current = this.head || this,
        string = '';

    while (current) {
        string += current.val + (current.next ? ', ' : '');
        current = current.next;
    }
    return string;
};

ListNode.from = function (values) {
    let list = new ListNode();
    for (let i = 0; i < values.length; i++) {
        list.append(values[i])
    }
    return list.getHead()
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    let head, cur, temp;
    if (!l1 || !l2) return l1 || l2;
    if (l1.val < l2.val) {
        cur = l1;
        temp = l2
    } else {
        cur = l2;
        temp = l1
    }
    head = cur;

    while (temp) {
        if (cur.next && cur.next.val > temp.val || !cur.next) {
            // 把temp 插入到cur和cur.next之间的操作
            let tempNext = temp.next;
            let curNext = cur.next;
            cur.next = temp;
            temp.next = curNext;
            // 移动当前指针
            temp = tempNext;
            cur = cur.next
        } else {
            cur = cur.next
        }
    }
    return head
};

let head = mergeTwoLists(ListNode.from([1, 2, 4]), ListNode.from([1, 3, 5]));
console.log(ListNode.prototype.toString.call(head));