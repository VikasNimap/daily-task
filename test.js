// class Person {
//     constructor(public firstName: string, public lastName: string) {
//     }
//     public get getFullName() { return this.firstName + " " + this.lastName }
// }
// // let person = new Person('Vikas', 'Maurya');
// // console.log(person.getFullName);
// class Student extends Person {
//     constructor(public standard: string, private _phone: string, firstName: string, lastName: string) {
//         super(firstName, lastName)
//     }
//     get mobile() { return this._phone }
// }
// let student = new Student('12th', '9819234454', 'Vikas', 'Maurya');
// // student._phone = '1234567890'
// // console.log(student.mobile);
// class Teacher extends Person {
//     constructor(firstName: string, lastName: string, private _subject: string) {
//         super(firstName, lastName)
//     }
//     get subject() { return this._subject }
//     override get getFullName() { return 'Prof. ' + this.firstName + " " + this.lastName }
// }
// let teacher = new Teacher('Akash', 'Yadav', 'NodeJs');
// // console.log(teacher.getFullName);
// class Principal extends Person {
//     public get getFullName() { return 'Principal. ' + super.getFullName }
// }
// function printNames(people: Person[]) {
//     for (let person of people) {
//         console.log(person.getFullName);
//     }
// }
// printNames([
//     new Student('12th', '9876543234', 'Vikas', 'Maurya'),
//     new Teacher('Akash', 'Yadav', 'Botany'),
//     new Principal('ddfvf', 'sjdfd')
// ])
// var SeatAssignment = /** @class */ (function () {
//     function SeatAssignment() {
//     }
//     return SeatAssignment;
// }());
// var seats = new SeatAssignment();
// seats.s1 = 'Vikas Maurya';
// console.log(seats.s1);
if (!true) {
    i = 10
    console.log(i);
} else {
    console.log(i);
}