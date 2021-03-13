const {systemInit} =  require('./panKuai.js')
const {pathName} = require('./fileName')
const {writeFile} = require('./file')
const {input} = require('./user.js')
const {mkFile} = require('./file')

//初始化盘块
systemInit(pathName)
//写入文件列表信息
writeFile()
mkFile()