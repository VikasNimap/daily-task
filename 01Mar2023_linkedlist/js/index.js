// console.log("hello");
// let num = 1;
// let limit = 100;
// while(num<=limit){
//     console.log(num);
//     num += 1
// }

// class List {
//     constructor(data, next) {
//         this.data = data,
//             this.next = null
//     }
// }

// class LinkedList {
//     constructor(data, next) {
//         this.head = null,
//             this.tail = null
//     }
//     insertAtBeginning(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list,
//                 this.tail = list
//         }
//         else {
//             list.next = this.head,
//                 this.head = list
//         }
//     }
//     insertAtEnd(data) {
//         const list = new List();
//         list.data = data;
//         if (!this.head) {
//             this.head = list;
//             this.tail = list
//         }
//         else {
//             this.tail.next = list
//             this.tail = list
//         }
//     }
//     print(data) {
//         for (let i = this.head; i != null; i = i.next) {
//             console.log(i.data);
//         }
//     }
// }

// const node = new LinkedList();
// node.insertAtBeginning(4);
// node.insertAtEnd(5);
// node.insertAtEnd(6);
// node.insertAtEnd(7);
// node.insertAtEnd(8);
// node.insertAtEnd(9);

// node.print();
// console.log("___________________________________________________________________")
// const node2 = new LinkedList();
// node2.insertAtBeginning(11);
// node2.insertAtEnd(12);
// node2.insertAtEnd(13);
// node2.insertAtBeginning(9);
// node2.insertAtBeginning(8);
// node2.insertAtBeginning(7);
// node2.insertAtBeginning(6);

// node2.print();

// for(let i=node.head;i!=null;i=i.next){
//     for(let j=node2.head;j!=null;j=j.next){
//     if(i.data==j.data) console.log(i.data);
//     }
// }
// let num = 1;
// let limit = 100;
// while(num<=limit){
//     if(num%10==0)
//     console.log(num);
//     num++
// }

// function fibonacci(num){
//     if(num<=1){
//         return num
//     }
//     else{
//         return fibonacci(num-1)+fibonacci(num-2)
//     }
// }
// for(let i = 0;i<=5;i++){
//     fibonacci(i)
// }

let data = [12,34,56,12,34];
let filter = data.filter((e,index,data)=>{
      return data.indexOf(e)!==index
})
console.log(filter);