/* 
* @Author: camilla.luo
* @Date:   2016-11-30 16:33:47
* @Last Modified by:   camilla.luo
* @Last Modified time: 2016-11-30 16:41:43
*/

'use strict';
function pickAdURL(){
	var slotURL="";
	if (Math.random()*10000>4999){
		slotURL='http://www.spacemonsters.co.uk/games/adsense.php';
	} else {
		slotURL='http://www.spacemonsters.co.uk/games/boostermedia.php';
	}
	g.banad.style.display = "block";
	if (slotURL != "")
	{
		g.banad.innerHTML='<iframe src="'+slotURL+'" width="320" height="50" frameborder="0" scrolling="no">i</iframe>';
	} else {
	}
};