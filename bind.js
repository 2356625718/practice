Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    console.error("type error")
  }
  let self = this
  let args = Array.prototype.slice.call(arguments, 1)
  let temp = function () {}
  let newFunc = function () {
    self.call(context, args.concat(Array.prototype.slice.call(arguments)))
  }
  temp.prototype = self.prototype
  newFunc.prototype = new temp()
  return newFunc
}

let say = function (name) {
  console.log("name=", name)
}

let say2 = say.bind(this, 'zy')

say2()