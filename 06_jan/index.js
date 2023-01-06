// let data = [34,56,7,32];
// let min = data[0]
// let max = 0;
// for(let i = 1;i<data.length;i++){
//     if(data[i]<min){
//         min = data[i]
//     }
// }
// console.log(min);
let data = [34,1,2,45,1];
let min = data[0];
let max = 0;
for(let i = 0;i<data.length;i++){
    if(data[i]<min){
        min = data[i]
    }
}
for(let i = 0;i<data.length;i++){
    if(data[i]>max){
        max = data[i]
    }
}
console.log(min);
console.log(max);