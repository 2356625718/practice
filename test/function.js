const mysql = require('mysql')
const {input} = require('./input')

const show = () => {
  let connObj = {
    host: 'localhost',
    user: 'root',
    password: '235662',
    database: '周雨',
    port: 3306
  }

  let conn = mysql.createConnection(connObj)
  return new Promise((resolve,reject) => {
    conn.query('select 姓名,性别,学号,年龄,系别 from student order by rand() limit 1;', (err, rows) => {
      if (err) {
        console.error(err)
      }
      console.log("姓名:",rows[0].姓名)
      console.log("性别:",rows[0].性别)
      console.log("学号:",rows[0].学号)
      console.log("年龄:",rows[0].年龄)
      console.log("系别:",rows[0].系别)
      resolve(true)
    })
  })
}

const delOne = () => {
  let connObj = {
    host: 'localhost',
    user: 'root',
    password: '235662',
    database: '周雨',
    port: 3306
  }

  let conn = mysql.createConnection(connObj)
  input('要删除学生的学号:\n')
  .then(res => {
    let id = res
    console.log("学号=",id)
    conn.query('delete from student where 学号 = ?', id, (err, result) => {
      if (err) {
        console.log("删除失败,可能根本没有这个学号的学生")
      } else {
        console.log("删除成功")
      }
    })
  })
}

const find = () => {
  let connObj = {
    host: 'localhost',
    user: 'root',
    password: '235662',
    database: '周雨',
    port: 3306
  }

  let conn = mysql.createConnection(connObj)
  input("请输入你要查询学生的学号:\n")
  .then(id => {
    conn.query('select * from student where 学号 = ?', id, (err, rows) => {
      if (err || rows.length === 0) {
        console.log("没有该学号的学生")
      } else {
        console.log("姓名:",rows[0].姓名)
        console.log("性别:",rows[0].性别)
        console.log("学号:",rows[0].学号)
        console.log("年龄:",rows[0].年龄)
        console.log("系别:",rows[0].系别)
      }
    })
  })
}


module.exports = {
  show,
  delOne,
  find
}