/**
 * 用户操作相关方法
 */

const readline = require('readline')
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const input = (text) => {
  return new Promise ((resolve) => {
    rl.question(text, (res) => {
      resolve(res)
    })
  })  
}

module.exports = {
  input
}