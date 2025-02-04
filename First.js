let exp_lib = require("express");
let sirf_express = exp_lib();
let path_libray = require("path");

let static_file_path = path_libray.join(__dirname , "Files")

sirf_express.use(exp_lib.static(static_file_path));

sirf_express.get('/',function(a,b){
    b.sendFile(path_libray.join(static_file_path , "Home.html"));
})
sirf_express.get('/a',function(a,b){
    b.sendFile(path_libray.join(static_file_path , "About.html"));
})
sirf_express.get('/c',function(a,b){
    
})





// sirf_express.get("/",function(req,res){
//     res.send(`
//     <h1>Hello Express Server Started</h1>
//     <ul>
//         <li><a href="/about">Go to About Page</a></li>
//         <li><a href="/contact">Go to Contact Page</a></li>
//     </ul>`);
// })

// sirf_express.get("/about",function(req,res){
//     res.send(` <h1>Hello Express Server Started</h1>
//     <ul>
//         <li><a href="/about">Go to About Page</a></li>
//         <li><a href="/contact">Go to Contact Page</a></li>
//     </ul>
// `);
// })

// sirf_express.get("/contact",function(req,res){
//     res.send(`
//         <h1>Hello Express Server Started</h1>
//         <ul>
//             <li><a href="/about">Go to About Page</a></li>
//             <li><a href="/contact">Go to Contact Page</a></li>
//         </ul>`);
// })

// sirf_express.get("*",function(req,res){
//     res.send(`Hello Express Server Started
//         <p>Page Not Found </p>`);
// })

sirf_express.listen(8000)