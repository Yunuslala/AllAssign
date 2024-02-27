// const reverseString=(string)=>{
//     string=string.split(" ");
//     let reverse=[]
//     for(let i=0;i<string.length;i++){
//         let temp=string[i];
//         let reverseString=""
//         for(let j=temp.length-1;j>=0;j--){
//             reverseString+=temp[j];
//         }
//         reverse.push(reverseString)
//     }
//     return reverse.join(" ");
// }

// let ans=reverseString("hello word");
// console.log(ans)

// const path=require("path");

// const joinedPath=path.resolve('path','to','..','cart.route.js');


// console.log(joinedPath)

// const os=require("os");

// const fresmem=os.cpus();
// console.log(fresmem)

const bufFromString = Buffer.from('Hello, World!', 'utf8');
console.log(bufFromString)
const bufFromArray = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f],'utf-8');
console.log(bufFromArray)