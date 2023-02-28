// console.log("hello");
// console.log(typeof(a));
// let cheese = 'Cheddar';

// if (cheese) {
//   console.log('Yay! Cheese available for making cheese on toast.');
// } else {
//   console.log('No cheese on toast for you today.');
// }

// (function (){
//     const a = b = 3;
// })()
// console.log(typeof a);
// console.log(typeof b);

// let obj = {
//     name: "bikas",
//     age: 20
// }
// let obj2 = obj
// obj2.name = "akash"
// console.log(obj2);
// console.log(obj);

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// console.log(3);

// async function test(){
//     setTimeout(() => {
//         console.log(1);
//         test()
//     },5000);
// }
// {
// var a = 10;
// let b = 20;
// const c = 30;
// }
// console.log(a,b,c);

// console.log(1);
// let p1 = (()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(2);
//             resolve()
//         }, 1000);
//     })
// })
// async function test(){
//     await p1()
//     console.log(3);
// }
// test()

// let data = [{name: "Vikas",id: 1},{name: "Satendra",id:2},{name: "Virendra",id:3}];
// let obj = {};
// for(let i = 0;i<data.length;i++){
//     obj[data[i].name] = data[i].id
// }console.log(obj);

// let data = [{name: "Vikas",id: 1},{name: "Satendra",id:2},{name: "Virendra",id:3}];
// let res = data.reduce((acc,curr)=>{
//     acc[curr.name] = curr.id
//     return acc
// },{})
// console.log(acc);

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor(data, next) {
        this.head = null
        this.tail = null;
    }

    insertayBegining(data) {
        const node = new Node();
        node.data = data;
        if (!this.head) {
            this.head = node;
            this.tail = node
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    insertatEnd(data) {
        const node = new Node();
        node.data = data;
        if (!this.head) {
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    print(data) {
        for (let i = this.head; i != null; i = i.next) {
            console.log(i.data);
        }
    }
}

const sl = new singlyLinkedList();
sl.insertayBegining(3);
sl.insertayBegining(2);
sl.insertayBegining(1);
sl.insertatEnd(4);
sl.insertatEnd(5);
sl.insertayBegining(0);

sl.print();



/// practice
class Node{
    constructor(data,next){
        this.head = data
        this.next = null
    }
}

class singlyLinkedList{
    constructor(data,next){
        this.head = null
        this.tail = null
    }
    insertAtBeginning(data){
        const node = new Node();
        node.data = data
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head = node
        }
    }
    insertAtEnd(data){
        const node = new node();
        node.data = data
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node 
        }
    }
    print(data){
        for (let i = this.head; i !=null; i=i.next) {
            console.log(i.data);  
        }
    }
}