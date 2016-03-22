window.onload = function  () {
	// 获取浏览器可用的屏幕宽度
	// var screenW =  screen.availWidth;

	// 兼容性写法
	var win_w=window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	console.log(win_w);


	var divList = document.getElementsByTagName("div");

	for (var i =0,len=divList.length;i<len;i++) {

		if(win_w > 1200){
			break;
		}else{
			document.body.removeChild(document.getElementsByTagName("p")[0]);
		}

		var class_name = divList[i].className;

		if((/col/g).test(class_name)){

			var temp = class_name.split(" ")[1];

			divList[i].innerHTML = temp;

		}

	};


	document.getElementById("lnk").onclick = function  () {
		window.open("ife_task_1_8_1.html","_blank","width=768");
	}
}