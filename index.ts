type Employee = {
    name: string, email: string, phone?: string, password: string
}

// let details: Employee = {
//     name: 'vikas maurya',
//     email: 'vikas@gmail.com',
//     // phone: '1234567890',
//     password: '12345'
// };

// console.log(details);


// let details: Employee = {
//     name: 'vikas maurya',
//     email: 'vikas@gmail.com',
//     // phone: '1234567890',
//     password: '12345',
//     age: '21'
// };

// console.log(details);

// function cmToInch(height: number | string) {
//     if (typeof height === 'number') {
//         return Math.round(height / 2.54 / 12) + ' ft'
//     } else {
//         return Math.round(Number(height) / 2.54 / 12) + ' ft'
//     }
// }
// console.log(cmToInch(164.592));


// function cmToInch(height: number | string) {
//     if (typeof height === 'number') {
//         return Math.round(height / 2.54 / 12) + ' ft'
//     } else {
//         return Math.round(Number(height) / 2.54 / 12) + ' ft'
//     }
// }
// console.log(cmToInch('164.592'));



// type Draggable = {
//     drag: () => void
// };
// type Resizable = {
//     resize: () => void
// }

// type UiWidget = Draggable & Resizable

// let textBox: UiWidget = {
//     drag: () => { },
//     resize: () => { }
// }
// type Quantity = 50 | 100
// let quantity: Quantity = 100;


// function greet(name: string | undefined) {
//     console.log(`Hii ${name?.toUpperCase()}`);

// }
// greet('undefined')


// type Customer = { birthday?: Date };
// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(12);
// console.log(customer?.birthday?.getDay(), customer?.birthday?.getDate(), customer?.birthday?.getMonth(), customer?.birthday?.getFullYear());



// let details = {
//     name: 'vikas',
//     email: 'vikas@gmail.com',
//     adderss: {
//         home: ['new York', 'Mumbai', 'uttar Pradesh'],
//         work: ['Bangalore', 'Madhya Pradesh']
//     }
// }

// console.log(details?.adderss?);

// let log: any = null;
// console.log(log?.('a'))

// let speed: number | null = null;

// let ride = {
//     speed: speed !== null?? 30
// }

// console.log(ride);


// let phone = <HTMLInputElement>document.getElementById('phone');
// phone.value

// function render(document: unknown) {

//     document.move();
// }

class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid Amount')
        this.balance += amount
    }
}

let account = new Account(67313170674, 'Mr. Vikas Maurya', 4000);
account.deposit(1000)
console.log(typeof account);
