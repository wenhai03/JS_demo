/* 
* @Author: camilla.luo
* @Date:   2016-11-30 16:37:06
* @Last Modified by:   camilla.luo
* @Last Modified time: 2016-11-30 16:41:40
*/

'use strict';
var imglib = [
{
	"sheetname"				: "playersheet",
	"type"					: "player",
	"src"					: "library/playership.gif",
	"width"					: 96,
	"height"				: 48,
	"framewidth"			: 48,
	"frameheight"			: 24,
	"framedelay"			: 4,
	"framesperdirection"	: 2,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "rocket",
	"type"					: "rocket",
	"src"					: "library/rocket.gif",
	"width"					: 128,
	"height"				: 128,
	"framewidth"			: 64,
	"frameheight"			: 32,
	"framedelay"			: 8,
	"framesperdirection"	: 2,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "powerup",
	"type"					: "powerup",
	"src"					: "library/powerup.gif",
	"width"					: 64,
	"height"				: 96,
	"framewidth"			: 32,
	"frameheight"			: 32,
	"framedelay"			: 8,
	"framesperdirection"	: 2,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "ground",
	"type"					: "ground",
	"src"					: "library/ground.gif",
	"width"					: 640,
	"height"				: 128,
	"framewidth"			: 640,
	"frameheight"			: 128,
	"framedelay"			: 1,
	"framesperdirection"	: 1,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "ground2",
	"type"					: "ground",
	"src"					: "library/ground2.gif",
	"width"					: 640,
	"height"				: 128,
	"framewidth"			: 640,
	"frameheight"			: 128,
	"framedelay"			: 1,
	"framesperdirection"	: 1,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "laser",
	"type"					: "laser",
	"src"					: "library/laser.gif",
	"width"					: 32,
	"height"				: 4,
	"framewidth"			: 32,
	"frameheight"			: 4,
	"framedelay"			: 1,
	"framesperdirection"	: 1,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "pilotsheet",
	"type"					: "pilot",
	"src"					: "library/rebel.gif",
	"width"					: 192,
	"height"				: 32,
	"framewidth"			: 32,
	"frameheight"			: 32,
	"framedelay"			: 8,
	"framesperdirection"	: 4,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "aliensheet",
	"type"					: "probe",
	"src"					: "library/probe.gif",
	"width"					: 96,
	"height"				: 256,
	"framewidth"			: 48,
	"frameheight"			: 64,
	"framedelay"			: 16,
	"framesperdirection"	: 2,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "raidersheet",
	"type"					: "raider",
	"src"					: "library/raider.gif",
	"width"					: 96,
	"height"				: 96,
	"framewidth"			: 48,
	"frameheight"			: 24,
	"framedelay"			: 16,
	"framesperdirection"	: 2,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "explosionsheet",
	"type"					: "explosion",
	"src"					: "library/explosion.gif",
	"width"					: 192,
	"height"				: 32,
	"framewidth"			: 32,
	"frameheight"			: 32,
	"framedelay"			: 4,
	"framesperdirection"	: 5,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "alienbombsheet",
	"type"					: "alienbomb",
	"src"					: "library/alienbomb.png",
	"width"					: 96,
	"height"				: 48,
	"framewidth"			: 24,
	"frameheight"			: 24,
	"framedelay"			: 2,
	"framesperdirection"	: 4,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
},
{
	"sheetname"				: "bonussheet",
	"type"					: "bonus",
	"src"					: "library/bonus.png",
	"width"					: 32,
	"height"				: 48,
	"framewidth"			: 16,
	"frameheight"			: 16,
	"framedelay"			: 2,
	"framesperdirection"	: 2,
	"deathframe"			: 0,
	"deathframecount"		: 0,
	"attackframe"			: 0,
	"attackframecount"		: 0,
	"painframe"				: 0,
	"painframecount"		: 0
}
];