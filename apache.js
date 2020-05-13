var http=require('http')
var fs = require('fs')
var server=http.createServer()
var wwwDir='C:/Users/86177/Desktop/没事乱写/www'
server.on('request',function(req,res){
    console.log('收到客户端请求,请求路径是'+req.url)
    var url = req.url
    fs.readFile('./template.html',function (err,data) {
        if (err) {
            return res.end('404 not found')
        }
        fs.readdir(wwwDir,function (err,files) {
            if(err){
                return res.end('读取文件失败')
            }
        var content=''
        files.forEach(function (item) {
            content += `
            <tr>
                <td data-value="a.txt"><a class="icon file" draggable="true" href="/a.txt">${item}</a></td>
                <td class="detailsColumn" data-value="0">0 B</td>
                <td class="detailsColumn" data-value="1585705262">2020/4/1 上午9:41:02</td>
            </tr>
            `
        })
        data=data.toString()
        data=data.replace('嘿嘿',content)
        res.end(data)
    })
  })
})
server.listen(3000,function(){
    console.log('访问http://127.0.0.1:3000/请求服务器')
})