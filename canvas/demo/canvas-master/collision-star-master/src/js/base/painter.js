export const BallPainter = {
    paint(sprite,ctx){
        var x = sprite.left + sprite.width/2,
            y = sprite.top + sprite.height/2,
            radius = sprite.width/2;
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y,radius,0,Math.PI*2,false);
        ctx.clip();

        ctx.fillStyle = "#ff9966";
        ctx.fill();

        ctx.lineWidth=2;
        ctx.strokeStyle='#ff5e62';
        ctx.stroke();
    
        ctx.restore();
    }
}

export class SpriteSheetPainter{
    constructor(spritesheet,cells){
        this.cells = cells||[];
        this.cellIndex = 0;
        this.spritesheet = spritesheet
    }

    advance(){
        if(this.cellIndex >= this.cells.length - 1){
            this.cellIndex=0;
        }else{
            this.cellIndex++;
        }
    }

    paint(sprite,ctx){
        var cell=this.cells[this.cellIndex];
        ctx.drawImage(this.spritesheet,cell.x,cell.y,cell.w,cell.h,sprite.left,sprite.top,sprite.width,sprite.height);
    }
}

export const StarPainter = {
    paint(sprite,ctx){
        ctx.save();
        ctx.beginPath();
        for(let i=0; i<5; i++){
            ctx.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * sprite.width / 2 + sprite.left,
                       -Math.sin((18 + i * 72) / 180 * Math.PI) * sprite.width / 2 + sprite.top);
            
            ctx.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * sprite.width / 4 + sprite.left,
                       -Math.sin((54 + i * 72) / 180 * Math.PI) * sprite.width / 4 + sprite.top)
        }
        ctx.closePath()
        ctx.fillStyle = `rgba(${sprite.colors.join(",")}, ${sprite.alpha})`;
        ctx.fill();
    
        ctx.restore();
    }
}
