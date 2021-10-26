import Director from "./game/director.js"

const canvas = document.getElementById('canvas');
canvas.height = 600;
canvas.width = 450;

var ctx = canvas.getContext('2d')
    
new Director(canvas,ctx)




