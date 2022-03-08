import Sprite from "../base/sprite.js"
import { StarPainter } from "../base/painter.js"
import { colors } from "../base/constant.js"
class Star extends Sprite{ //继承自sprite类
    constructor(startX, startY){
        super("star", StarPainter,[
            {
                execute: (sprite, ctx, time) => {
                    
                    if(sprite.lastMove === undefined) sprite.lastMove = time
                    let deltaTime = (time-sprite.lastMove) / 1000
                    
                    sprite.velocityY +=  sprite.gravity * deltaTime
                    
                    
                    sprite.left += sprite.velocityX * deltaTime;
                    sprite.top += sprite.velocityY * deltaTime;
                    
                    sprite.alpha -= 0.01

                    if(sprite.alpha <= 0){
                        sprite.visible = false
                    }
                    sprite.lastMove = time
                }
            }
        ])
        this.left = startX
        this.top = startY
        this.width = 20
        this.height = 20

        this.speed = Math.random() * 180 + 50
        this.angle = Math.random() * Math.PI * 2
        
        this.velocityX = Math.cos(this.angle) * this.speed
        this.velocityY = Math.sin(this.angle) * this.speed 
        
        this.gravity = 300
        this.lastMove = undefined

        this.alpha = 1
        this.colors = colors[parseInt(Math.random() * 6)]

    }

    refresh(ctx,time){
        this.update(ctx,time)
        this.paint(ctx)  
    }
}

export default class DrawStars {
    constructor(startX,startY){
        this.startX = startX
        this.startY = startY
        this.stars = this.initStars()
    }

    initStars(){
        let arr = [], sum = Math.random()*10+10
        for(let i = 0; i<sum; i++){
            arr.push(new Star(this.startX, this.startY))
        }
        return arr
    }

    reset(x,y){
        this.startX = x
        this.startY = y
        this.stars = this.initStars()
    }

    draw(ctx,time){
        this.stars.forEach(star => {
            star.refresh(ctx,time)
        })
        //只要任意一个透明度为0，就不可见，这里简化为第一个星星透明度为0就不可见
        this.visible = this.stars[0].visible
    }

}