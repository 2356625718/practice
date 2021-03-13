const pathName = './a.txt'

class FileName {
  constructor (name, ext, i, Amount, size) {
    this.name = name || null  //文件名
    this.ext = ext || null   //扩展名
    this.i = i || -1     //文件占用的第一个磁块号
    this.Amount = Amount || 0 //文件占用的磁盘块数量
    this.size = size || 0   //文件大小
  }
  
  toString () {
    let str = '{文件信息:['
      str += '{name:' + this.name + '},' + '{ext:' + this.ext + '},' + '{i:' + this.i + '},' + '{Amount:' + this.Amount + '},' + '{size:' + this.zize + '}}\n'
      return str
  }
}

const FileArr = []

//文件目录
const getFileArr = () => {
  if (FileArr[19] === undefined) {
    for (let i = 0; i < 20; i++) {
      let file = new FileName()
      FileArr.push(file)
    }
  }
  return FileArr
}

module.exports = {
  pathName,
  FileName,
  getFileArr
}