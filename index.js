class List {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data, next) {
        this.head = null;
        this.tail = null;
    }
    insertAtBeginning(data) {
        const list = new List();
        list.data = data;
        if (!this.head) {
            this.head = list;
            this.tail = list;
        } else {
            list.next = this.head;
            this.head = list;
        }
    }
    insertAtEnd(data) {
        const list = new List();
        list.data = data;
        if (!this.head) {
            this.head = list;
            this.tail = list;
        } else {
            this.tail.next = list;
            this.tail = list
        }
    }
    print(data) {
        for (let i = this.head; i != null; i = i.next) {
            console.log(i.data);
        }
    }
}

const node = new LinkedList();
node.insertAtBeginning(4);
node.insertAtBeginning(5);
node.insertAtEnd(4);
node.print()

