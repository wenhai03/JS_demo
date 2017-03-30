//移动函数：实现每次向规定方向移动多少px
//dir:步长
//distance: 每次需要移动的像素值，可正可负
//endFn: 回调函数
function moveHowMuch(obj,attr,dir,distance,interval,endFn){
	
		var initial = parseInt(getStyle(obj,attr));//初始位置值
		var num_dir = 0;//存储加了dir多少次
		dir = distance>0 ? dir : -dir;//判断dir的正负
		clearInterval(obj.timer);

		obj.timer = setInterval(function(){
			var offset = parseInt(getStyle(obj,attr)) + dir;
			num_dir++;
			var dir_total = num_dir*dir;
			if(dir_total > distance && dir>0 || dir_total < distance && dir<0){
				offset = initial+distance;
				dir_total = distance;
				
			}
			obj.style[attr] = offset + 'px';
			if( dir_total === distance ){
				clearInterval(obj.timer);
				num_dir = 0;
				endFn&&endFn();
			}
			
		},interval);
	}
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}