function Events () {
  this.evensObj = {}
  this.on = function (name, func) {
    if (!this.evensObj) {
      this.evensObj = {}
    }
    if (!this.evensObj[name]) {
      this.evensObj[name] = []
    }
    this.evensObj[name].push(func)
  }

  this.emit = function (name, arg) {
    if (this.evensObj[name]) {
      for (let i = 0; i < this.evensObj[name].length; i++) {
        this.evensObj[name][i](arg)
      }
    }
  }
}

let event = new Events()
event.on('say', (name) => {
  console.log("hello,", name)
})

event.emit('say', 'zy')

let event2 = new Events()
event2.on('say', (name) => {
  console.log("hello,", name)
})

event2.emit('say', '哈哈')