function ajax(obj){
  var defaults = {
    type:'get',
    async:true,   
    dataType:"jsonp",   
    jsonp:"callback", //默认的回调函数名称
    data:{},
    success:function(data){
      console.log(data);
    }
  }

  //传入参数替换默认参数
  for(var key in obj){
    defaults[key] = obj[key];
  }

  var cbName;

  if(defaults.jsonp){
    cbName = defaults.jsonp;
  }

  //调用回调函数,data值为返回参数
  window[cbName] = function(data){
    defaults.success(data)
  }

  //参数字符串拼接
  var param = '';
  for(var attr in defaults.data){
    param = attr + '=' + defaults[attr] + '&'
  }

  if(param){
    param = param.substring(0,param.length-1);
    param = '&' + param
  }

  //动态创建script标签
  var script = document.createElement('script');
  script.src = defaults.url + '?' + "callback=" + defaults.jsonp + param;
  //传给后端回调函数名称和参数
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}