function ListNode () {
  function Node (val) {
    this.val = val
    this.next = null
  }

  this.head = null

  this.append = function (val) {
    let cur = null
    if (this.head === null) {
      this.head = new Node(val)
    } else {
      cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = new Node(val)
    }
  }
  this.getHead = function () {
    return this.head || this
  }
}

ListNode.prototype.print = function () {
  let cur = this.head || this
  if (!cur.val) return console.log([])
  let arr = []
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  console.log(arr)
}

ListNode.from = function (arr) {
  let list = new ListNode()
  for (let val of arr) {
    list.append(val)
  }
  return list.getHead()
}

function merge (head) {
  let _head = head
  if (!_head) return []
  let value = head.val

  while (head.next) {
    // 保存当前个元素
    let pre = head
    // 获取第二个元素
    let next = head.next
    if (next.val === value) {
      // 把第一个元素的next指针指向第三个元素, 也就是删除第二个元素
      pre.next = next.next || null
    } else {
      value = next.val
      head = pre.next
    }
  }
  console.log(_head)
  return _head
}

// list = {val:0, index: 1, next: {val: 0, index: 2, next: {val: 0, index: 3, next: {val: 0, index: 4, next: null}}}}

let list = ListNode.from([1, 1, 1])
console.log(list)
ListNode.prototype.print.call(list)

merge(list)

ListNode.prototype.print.call(list)