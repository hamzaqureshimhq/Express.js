let exp = require("express")
let myexp = exp();

myexp.set("view engine" , "ejs")
myexp.get("/" ,function(a,b){
    let msg = "This Message from Another Planet";
    let country = ["Pak" , "India" , "China" , "afghan" , "United States" , "Russia"]
    b.render("Home" , {c: country} )
})

myexp.get("/a" ,function(a,b){
    let Student = [
        {name: "Stu 1" , fees : 6000 , image: "https://static.vecteezy.com/system/resources/previews/034/966/432/non_2x/ai-generated-portrait-of-student-background-free-png.png" , email : "hamza@gmail.com"},
        {name: "Stu 2" , fees : 6500 , image: "https://static.vecteezy.com/system/resources/previews/034/966/432/non_2x/ai-generated-portrait-of-student-background-free-png.png" , email : "hamza@gmail.com"},
        {name: "Stu 3" , fees : 7000 , image: "https://static.vecteezy.com/system/resources/previews/034/966/432/non_2x/ai-generated-portrait-of-student-background-free-png.png" , email : "hamza@gmail.com"},
        {name: "Stu 4" , fees : 5000 , image: "https://static.vecteezy.com/system/resources/previews/034/966/432/non_2x/ai-generated-portrait-of-student-background-free-png.png" , email : "hamza@gmail.com"},
        {name: "Stu 5" , fees : 4500 , image: "https://static.vecteezy.com/system/resources/previews/034/966/432/non_2x/ai-generated-portrait-of-student-background-free-png.png" , email : "hamza@gmail.com"}
    ]
    b.render("about", {stu : Student})
})



myexp.listen(2001)
