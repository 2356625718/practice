function strLength(s, bUnicode255For1) {
  if (bUnicode255For1 === true) return s.length
  else {
    let length = 0
    for (let key in s) {
      if (s[key].charCodeAt() > 255) {
        length += 2
      } else {
        length += 1
      }
    }
    return length
  }
}