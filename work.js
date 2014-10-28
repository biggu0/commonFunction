/**
 * 常用的工具函数汇总
 */
//时间戳获取
function time2stamp(){
    var d = new Date();
    return Date.parse(d) + d.getMilliseconds;
}

//获取url的参数，对象返回
function getUrlParam(url){
	var a = document.createElement("a"),
	param = {};
	a.href = url;
	url = a.search||document.location.search;
	if(url.indexOf("?") != -1){
		url = url.substr(1);
		var str = url.split("&");
		for(var i =0;i < str.length;i++){
			var paramGroup = str[i].split("=");
			param[paramGroup[0]] = decodeURIComponent(paramGroup[1]);
		}
	}
	return param;
}

//打乱数组的顺序
if(!Array.prototype.shuffle ){
	Array.prototype.shuffle = function(){
		//遍历数组，从数组中随机取出一个非当即的元素交换位置
		var len = this.length,
		temp;
		for(var i = 0;i< len;i++){
			var random = Math.floor(Math.random()*len);
			temp = this[i];
			this[i] = this[random];
			this[random] = temp;
		}
	}
}