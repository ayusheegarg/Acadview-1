
var http=require('http');

var server=http.createServer((req,res)=>{

var mytry={
    name:"ayushee",
    work:"full-stack developer",
    age:"21"
};
res.end(JSON.stringify(mytry));

});

server.on("connection",(socket)=>{
    console.log("hi!");
});
server.listen(3000);
console.log("working!!!");
