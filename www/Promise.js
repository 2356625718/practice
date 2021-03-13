const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(executor) {
  let _this = this
  this.onFulfilled = []
  this.onRejected = []
  this.state = PENDING
  this.value = undefined
  this.reason = undefined

  function resolve(value) {
    if (_this.state === PENDING) {
      _this.state = FULFILLED
      _this.value = value
      _this.onFulfilled.forEach(fn => fn(value))
    }
  }

  function reject(reason) {
    if (_this.state === PENDING) {
      _this.state = REJECTED
      _this.reason = reason
      _this.onRejected.forEach(fn => fn(reason))
    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

function resolvePromise (promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError("Chaining Cycle"))
  }
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let used
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (used) return
          used = true
          resolvePromise(promise2, y, resolvePromise, reject)
        }, (r) => {
          if (used) return
          used = true
          reject(r)
        })
      } else {
        if (used) return
        used = true
        resolve(x)
      }
    } catch (e) {
      if (used) return
      used = true
      reject(e)
    }
  } else {
    //普通值
    resolve(x)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : reason => reason
  console.log(typeof onFulfilled)
  let promise2 = new Promise ((res, rec) => {
    if (_this.state === FULFILLED) {
      setTimeout(() => {
        let x = onFulfilled(val)
        resolvePromise(promise2, x, res, rec)
      })
    }
    if (_this.state === REJECTED) {
      setTimeout(() => {
        let x = onRejected(reason)
        resolvePromise(promise2, x, res, rec)
      })
    }
    if (_this.state === PENDING) {
      _this.onFulfilled.push(() => {
        setTimeout(() => {
          let x = onFulfilled(_this.value)
          resolvePromise(promise2, x, res, rec)
        })
      })
      _this.onRejected.push(() => {
        setTimeout(() => {
          let x = onRejected(_this.reason)
          resolvePromise(promise2, x, res, rec)
        })
      })
    }
  })
  return promise2
}

var p = new Promise(function(resolve){
  setTimeout(function(){
      resolve(3)
  }, 1000)
});
p.then(1,1)
.then('','')
.then(() => {
  throw new TypeError('err')
})
.then(function(res){
  //3
  console.log(res)
}, function (err) {
  console.log(err)
})