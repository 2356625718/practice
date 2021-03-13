function formatDate (date, rule) {
  let obj = {
    yyyy: date.getFullYear(),
    yy: date.getFullYear() % 100,
    MM: date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
    M: date.getMonth() + 1,
    dd: date.getDate() >= 10 ? date.getDate() : '0' + date.getDate(),
    d: date.getDate(),
    HH: date.getHours() >= 10 ? date.getHours() : '0' + date.getHours(),
    H: date.getHours(),
    hh: date.getHours() % 12 >= 10 ? date.getHours() % 12 : '0' + date.getHours() % 12,
    h: date.getHours() % 12,
    mm: date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes(),
    m: date.getMinutes(),
    ss: date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds(),
    s: date.getSeconds(),
    w: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
  }
  for (let key in obj) {
    rule = rule.replace(key, obj[key])
    console.log(rule)
  }
}

formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
