const fs = require('fs')
const {mkdir} = require('./file.js')
/**
 * 盘块类
 */
class PanKuai {
  constructor () {
    this.map = new Array(20)    //盘块数量
    this.fileNum = 0   //文件数量
  }

  toString () {
    var str = '{盘块位示图:['
      for (let i = 0; i < this.map.length; i++) {
        if (i == 19) {
          str += this.map[i] + ']'
          break
        }
        str += this.map[i] + ','
      }
      str += ',fileNum:' + this.fileNum + '}\n'
      return str
  }
}

const pan = new PanKuai()

const getPan = function () {
  console.log("hehe")
  return pan
}

const systemInit = function (pathName) {
  //初始化盘块,第一个盘放文件目录，第二个盘放盘块位示图
  pan.map[0] = 1
  pan.map[1] = 1
  for (let i = 2; i < pan.map.length; i++) {
    pan.map[i] = 0
  }
  //建立新文件，文件目录盘块和只写的文件只能向这个文件写入
  mkdir(pathName)
  //偏移512L个字节的位置写入PanKuai实例)
  try {
    const fd = fs.openSync(pathName,'w+')
    fs.writeSync(fd, pan.toString())
  } catch (err) {
    console.error(err)
  }
  console.log("！！！初始化系统成功！！！")
}

module.exports = {
  getPan,
  systemInit
}