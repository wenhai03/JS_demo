
//多属性值的运动，json传递参数，iTarget值得在for in得到
function startMove(obj,json,fn) {
    clearInterval(obj.timer);
    var icur = 0;
    var iSpeed = 0;
    obj.timer = setInterval(function () {
        var btn = true; //定义开关判断定时器什么时候关闭
        for(var attr in json){
            var iTarget = json[attr];

            if(json[attr] == 'opacity'){
                icur = Math.round(css(obj,'opacity')*100);
            }else {
                icur = parseInt(css(obj,attr));
            };

            //速度取值得注意
            iSpeed = (iTarget - icur)/8;
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

            if(icur !== iTarget){
                btn = false;
                if(json[attr] == 'opacity'){
                    obj.style.opacity = (icur+iSpeed)/100;
                    obj.style.filter = 'alpha(opacity='+(icur+iSpeed)+')';
                }else {
                    obj.style[attr] = icur + iSpeed + 'px';
                }
            };
            console.log(obj.offsetLeft+':'+iSpeed)
        };
        //for in外面观察属性值是否都走到目标点，及btn为true关闭定时器
        if (btn){
            clearInterval(obj.timer);
            fn&&fn.call(obj);
        }
    },30);
};
function css(obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
};

