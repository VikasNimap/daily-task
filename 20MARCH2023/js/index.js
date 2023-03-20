// console.log("hello");
// let data = [12, 34, 50, 5, 60, 40, 50, 0, 100,40];
// for (let i = 0; i < data.length; i++) {                 //60
//     for (let j = i + 1; j < data.length; j++) {         //40                    2
//         if (data[i] + data[j] == 100) {
//             console.log(data[i], data[j]);
//         }
//     }
// }

// let data = [12,34,12,45,3,3];
// for(let i = 0;i<data.length;i++){
//     for(let j = i+1;j<data.length;j++){
//         if(data[i]==data[j]){
//             console.log(data[i]);
//         }
//     }
// }

// let num = 10;
// let count = 0;
// for(let i = 2;i<=num;i++){
//     count = 0
//     for(let j = 2;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==1){
//         console.log(i);
//     }
// }


let pattern = "*";
let res = "";
for(let i = 0;i<=5;i++){
    res+= " *"
    console.log(res);
}
