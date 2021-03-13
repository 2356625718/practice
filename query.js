function getUrlParam(sUrl, sKey) {
  let strArr = sUrl.split('?')[1].split('#')[0].split('&')
  let obj = {}
  for (let i = 0; i < strArr.length; i++) {
      if (obj[strArr[i].split('=')[0]]) {
         obj[strArr[i].split('=')[0]] = [obj[strArr[i].split('=')[0]],strArr[i].split('=')[1]].flat()
         continue
      }
      obj[strArr[i].split('=')[0]] = strArr[i].split('=')[1]
  }

  if (sKey !== undefined && sKey !== '') {
      return obj[sKey] || ''
  }
  return obj
}

let res = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key')
console.log(res)


