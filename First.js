let express_lib = require("express");

let sirf_express = express_lib();

let path = require("path");

let static_file = path.join(__dirname, "Files")

sirf_express.use(express_lib.static(static_file));

sirf_express.get('/',function(req,res){
    res.sendFile(path.join(static_file, "Home.html"));
})
sirf_express.get('/about',function(req,res){
    res.sendFile(path.join(static_file, "a.html"));
})
sirf_express.get('/contact',function(req,res){
    res.sendFile(path.join(static_file, "Contact.html"));
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