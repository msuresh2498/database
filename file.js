const fs =require("fs");

const quote = " NO beauty shines brighter than that of a good heart😊😊"

// fs.writeFile("./awesome.html", quote ,(err)=>{
//     console.log("completed Writing!!!")
// });


const quote2 = "Live more, worry less"


// const [, , noOffiles] = process.argv;

// for(let i=0; i<=noOffiles; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote2 ,(err)=>{
//         console.log("completed Writing!!!")
//     });
// }

// fs.readFile("./cool.txt", "utf-8",(err, data)=>{
//     if(err) {
//         console.log("❌",err)
//     } else {
//         console.log(data)
//     }
// })

// const quote3 = "good morning"
// fs.appendFile("./cool.txt", "\n" + quote3 ,(err)=>{
//     console.log("completed Writing!!!")
// });


//const quote3 = "good morning"
fs.unlink("./cool.txt",(err)=>{
    console.log("deleted successfully!!!")
});