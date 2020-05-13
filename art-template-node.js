var http = require('http')
var fs = require('fs')
var template = require('art-template')
var server = http.createServer()
var wwwdir='C:/Users/86177/Desktop/没事乱写/www'
server.on('request',function (req,res) {
    console.log('收到客户端请求，客户端请求路径是'+req.url)
    fs.readFile('./template.html',function (err,data){
        if(err){
            return res.end('文件读取失败')
        }
    fs.readdir(wwwdir,function (err,files) {
        if(err){
            return console.log('目录读取失败')
        }
        var let=template.render(data.toString(),{
            files:files
        })
        res.end(let)
    })

})
})
server.listen(3000,function (){
    console.log("访问127.0.0.1/访问服务器")
})