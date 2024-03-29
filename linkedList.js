class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) { 
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item)
    } else {

    let tempNode = this.head;
    while(tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let previousNode = this.head;
    
    if(!this.head) {
      return null;
    }

    while((currNode !== null) && (currNode.value !== key)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if(currNode.next === null) {
      console.log('Item not found')
      return;
    } 

    let newNode = previousNode
    newNode.next = new _Node(item, previousNode.next)
    // or
    // let newNode = new _Node(item, previousNode.next)
    // previousNode.next = newNode;
  }

  insertAfter(item, key) {
    let currNode = this.head;
    let previousNode = this.head;
    
    if(!this.head) {
      return null;
    }

    while((currNode !== null) && (previousNode.value !== key)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    //if your'e at the end of the list and you haven't found the key
    if(currNode === null && (previousNode.value !==key)) {
      console.log('Item not found')
      return;
    } 

    let newNode = new _Node(item, previousNode.next)
    previousNode.next = newNode;
  }

  //Is "zero-indexed" (consideres head to be position 0)
  insertAt(item, position) {
    if (position === 0) {
      this.head = new _Node(item, this.head)
      return;
    }

    let counter = 1;
    let prevNode = this.head;
    let currNode = this.head;
    while(counter <= position && currNode !== null) {
      counter++;
      prevNode = currNode;
      currNode = currNode.next;
    }
    
    let newNode = new _Node(item, currNode);
    prevNode.next = newNode;
  }

  remove(item) {
    // If the list is empty
    if(!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // start at the head
    let currNode = this.head;
    // keep track of the previous node
    let previousNode = this.head

    while((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found')
      return;
    }
    previousNode.next = currNode.next;
  }
  size() {
    let counter = 0;
    let currNode = this.head;
    if(!currNode){
      return counter;
    }
    else
      counter++;
    while (!(currNode.next == null)) {
      counter++;
      currNode = currNode.next;
    }
    return counter;
  }

  middleOfList(lst) {
    let end = lst.head;
    let middle = lst.head;
    // two cases cover even and odd length
    while(end !== null && end.next !== null) {
      // advance one pointer 2 times faster than the other
      end = end.next.next;
      middle = middle.next;
    }
    // return the value of the node which was advanced at regular speed
    return middle.value;
  };


  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if(!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /*Return null if its the end of the list
      and the item is not on the list*/
      if (currNode.next === null) {
        return null;
      }
      else {
        //Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  findNthElement(position) {
    let node = this.head;
    for (let i=1; i<position; i++) {
      node = node.next;
    }
    return node;
  }
  
  displayList(){
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

};

module.exports = LinkedList;