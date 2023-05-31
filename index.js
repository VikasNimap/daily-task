// function test(){
//     let a: number = 20;
//     let b: string = "vikas";
//     console.log(a+b);
// }
// test()
// let a: number = 10;
// let b: number = 20;
// a=a+b
// b=a-b
// a=a-b
// console.log(a,b)
// let arr:any = [];
// console.log(arr.length)
// let p1 = new Promise((resolve,reject)=>{
//     if(arr && arr.length){
//         resolve(arr)
//     }else{
//         reject(new Error('error'))
//     }
// }).then((data)=>console.log(data)).catch((err)=>console.log(err))
// function test(a:string,b:string){
//     let c = Number(a); let d = Number(b)
//     return Number(c+d)
// }
// console.log(test("12","4"))
// let arr: [string,number,string,number] = ["vikas",2,"3",6];
// console.log(arr)
// "type"{name="string",email:"string",password:"string",phone:"string"}
// let reqBody: = {};
// reqBody.name = "vikas";
// reqBody.email = "vikas@gmail.com";
// reqBody.password = "vikas@1234";
// reqBody.phone = "2344244394";
// function test(name:string):string {
//     return "true "+name
// }
// console.log(test("akash"))
var data = ["test", "estt", "sett", "cat", "tac"];
function anagram() {
    var query = {};
    for (var i = 0; i < data.length; i++) {
        var word = data[i].split("").sort().join("");
        if (query[word]) {
            query[word].push(data[i]);
        }
        else {
            query[word] = [];
            query[word].push(data[i]);
        }
    }
    console.log(query);
    // return Object.values(query)
}
console.log(anagram());
