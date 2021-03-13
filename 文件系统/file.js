const fs = require('fs')
const path = require('path')
const {
  getFileArr,
  pathName
} = require('./fileName.js')
const {
  input
} = require("./user")
/**
 * 文件操作相关方法
 */

class File {
  constructor() {
    this.name = ''
    this.ext = 'txt'
    this.content = ''
  }
}

class StrNode {
  constructor() {
    this.word = []
    this.i = 0
  }
}

//新建文件,文件已存在就删除文件再建
const mkdir = function (pathname) {
  pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname)
  pathname = path.relative(__dirname, pathname)
  try {
    if (fs.existsSync(pathname)) {
      fs.unlinkSync(pathname)
    }
  } catch {
    throw new Error("文件删除失败")
  }
  fs.writeFileSync(pathname, '', (err) => {
    console.error(err)
  })
}

//将目录及空闲盘块表写入磁盘
const writeFile = () => {
  const fileArr = getFileArr()
  for (let i = 0; i < fileArr.length; i++) {
    fs.appendFileSync(pathName, fileArr[i].toString())
  }
}

//根据内容新建文件
const mkFile = () => {
  const fileArr = getFileArr()
  const newFile = new File()
  let flag = false
  input('请输入新建文件的内容:(按回车键保存)\n')
    .then(res => {
      let resArr = res.split('')
      let strNode = new StrNode()
      let i, j = 0
      while (resArr.length !== 0) {
        for (i = 0; i < 64; i++) {
          if (resArr.length === 0) break
          let word = resArr.shift()
          strNode.word[i] = word
          strNode.i++
          if (strNode.i === 63) {
            j++
            strNode.word = []
          }
        }
      }
      let size = j * 64 + strNode.i
      console.log("文件长度为:" + size)
      input('请输入文件的英文名称')
      .then(res => {
        newFile.name = res
        input('请输入文件的扩展名称')
        .then(res2 => {
          newFile.ext = res2
          if (newFile.name === '' || newFile.name === undefined) {
            input("文件名不能为空,请输入文件的英文名称\n")
            .then(res => {
              newFile.name = res
              if (newFile.name === '' || newFile.name === undefined) {
                console.log("文件名不能为空,新建失败")
                return
              } else flag = true
            })
          } else flag = true
        })
      })
    })
    let timerId = setInterval(() => {
      if (flag === true) {
        clearInterval(timerId)
        let fileArr = getFileArr()
        let flag = fileArr.find(item => {
          console.log(item.name)
          return item.name === newFile.name
        })
        if (flag !== undefined) {
          console.log("文件已存在，创建失败")
          return
        }
        console.log(getPan())
        // let num = pan.fileNum
        // fileArr[num].size = size
        // fileArr[num].Amount = num
        // console.log(fileArr[num])
      }
    }, 500);
}

module.exports = {
  mkdir,
  writeFile,
  mkFile
}