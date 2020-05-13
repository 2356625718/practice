var http=require('http')
var fs = require('fs')
var server=http.createServer()
server.on('request',function(req,res){
    console.log('收到客户端请求,请求路径是'+req.url)
    var wwwDir='C:/Users/86177/Desktop/没事乱写/www'
    var url=req.url
    var filePath='/index.html'
    if(url !== '/'){
        filePath=url
    }
    fs.readFile(wwwDir+filePath,function (err,data){
        if(err){
            return res.end('404 not found')
        }
        res.end(data)
    })
})
server.listen(3000,function(){
    console.log('访问http://127.0.0.1:3000/请求服务器')
})