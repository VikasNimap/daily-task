// console.log("hello");
// let data = [34,22,11,28,64,3];
// for(let i = data.length-1;i>=0;i--){
//     console.log(data[i])
// }

// let num = 10;
// function recursion(num){
//     if(num==0){
//         return 1
//     }
//     return recursion(num-1)
// }
// console.log(recursion(num))
// recursion()


// function name() { 
// }
// name()
// console.log(name());

// console.log(a);
// {
//     var a = 10

// }

// for(var i = 0;i<10;i++){
//     function call(i){

//         setTimeout(() => {
//             console.log(i);
//         }, 2000);
//     }
//     call(i)
// }
// console.log(i)


// let i = 10;
// function apple(i){
//     banana(i>1?true:false)
// }
// apple(i)
// function banana(){
//     apple()
// }
// banana()

// let arr = [12, 35, 1, 10, 34, 1, 35];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max1){
//         max1 = arr[i]
//     }
// }
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max2 && arr[i]<max1){
//         max2 = arr[i]
//     }
// }
// console.log(max2);
// let num = 789;
// let res = "";
// while(num>0){
//     res += num%10
//     num = Math.floor(num/10)

// }
// console.log(res);
// let a = 10;
// let b = 12;
// a=a+b
// b=a-b
// a=a-b
// console.log(a);
// console.log(b);
// let a = 20;
// let b = 30;
// [a,b] = [40,20]
// console.log(a);
// console.log(b);

// let a = "vikas";
// let b = "sakiv";
// function anagram(a,b){
//     let str1 = a.split('')
//     // console.log(str1);
//     let s1 = str1.sort();
//     // console.log(s1);
//     let str2 = b.split('')
//     // console.log(str2);
//     let s2 = str2.sort();
//     if(s1==s2) console.log(true);
//     // console.log(s1.join(","));
//     if(s1.join(",")!=s2.join(",")){
//         return 'not anagram'
//     }
//     else{
//         return ` anagram`
//     }
// }
// console.log(anagram(a,b));

// let name="abcd-efg-ytuu"
// // console.log(name);
// // console.log(name.split(" "))
// // console.log();
// // name.join(",");
// let arr = ['v','i','k','a','s'];
// let arr2 = ['v','i','k','a','s'];
// if(arr=arr2) console.log(true);

// const str = `vikas
// hii
// hello
// `
// console.log(str);


// for(var i =0;i<10;i++){
//     function a(i){
//         setTimeout(() => {
//             console.log(i);
//         });
//     }
//     a(i)

// }

// let str = "Vikas Maurya";
// for(let i =0;i<str.length;i++){
//     let s1 = str.split('');
//      s2 = s1.reverse()
//     }
//     let s3 = s2.join('')
//     console.log(s3);
// let str = "Vikas Maurya";
// let s1  = str.split('');
// for(let i = 0;i<s1.length;i++){
//     let s = s1[s1.length-i-1];
//     let s2 = s.split('')
//     console.log(s2);
// }



// let a = "Vikas Maurya";
// let b = a.split(' ').reverse().join(' ').split('').reverse().join('');
// console.log(b);

// let rows = 5;
// let str = "";
// for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <=i; j++) {
//         str += "* ";
//     }
//     str +="\n"
// }
// console.log(str);
// let rows = 5;
// for(let i =0;i<=rows;i++){

// }
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // Inner loop for printing stars
//    for (let num = 1; num <= 5; num++) {
//       if(n==1|| n==rows)pattern += "*"
//       else{
//         if(n==1 || n==5){
//             pattern += "*"
//         }
//         else{
//             pattern += " "
//         }
//       }
//    }
//    pattern += "\n";
// }
// console.log(pattern);

// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= 5; num++) {
//       // print star only if it is the boundary location
//       if (n == 1 || n == rows) pattern += "*";
//       else {
//          if (num == 1 || num == 5) {
//             pattern += "*";
//          } else {
//             pattern += " ";
//          }
// //       }
// //    }
// //    pattern += "\n";
// // }
// // console.log(pattern);
// let rows = 5;
// let pattern = "";
// let n ;
// for(let i = 1;i<=rows;i++){
//     for(let j = 1;j<=i;j++){
//         if(i==1 || i==rows){
//             pattern += "*"
//         }
//         else{
//             if(i==1 || i==5){
//                 pattern += "*"
//             }
//             else{
//                 pattern += " "
//             }
//         }
//     }
//     pattern += "\n"
// }
// console.log(pattern);















