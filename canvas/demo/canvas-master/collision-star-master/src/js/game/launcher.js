import Sprite from "../base/sprite.js";
import { BallPainter } from "../base/painter.js"
import { Vector,Projection } from "../base/formula.js"

export default class Launcher extends Sprite{
    constructor(startX,startY){
        super('launcher', BallPainter,[
            {
                execute: (sprite, ctx, time) => {

                    if(sprite.lastMove === undefined) sprite.lastMove = time

                    let deltaTime = (time-sprite.lastMove) / 1000

                    sprite.left += sprite.velocityX * deltaTime;
                    sprite.top += sprite.velocityY * deltaTime;

                    //边界碰撞检测
                    //左右
                    if(sprite.left >= ctx.canvas.width - sprite.width || sprite.left <= 0){
                        sprite.velocityX = -sprite.velocityX
                    } 
                    //上下
                    if(sprite.top <= -sprite.height || sprite.top > ctx.canvas.height){ 
                        sprite.resetAnimation()
                        sprite.resetLocation()
                        return 
                    }
                    sprite.lastMove = time
                }
            }
        ]);

        this.width = 30
        this.height = 30

        this.startX = startX - this.width / 2
        this.startY = startY - this.height / 2

        this.left = this.startX
        this.top = this.startY

        this.lastMove = undefined
        this.collided = false

        

    }

    resetLocation(){
        this.left = this.startX
        this.top = this.startY
    }

    resetAnimation(){
        this.lastMove = undefined
        this.animating = false
    }

    checkCollision(target){
        let circleX = this.left + this.width/2, 
            circleY = this.top + this.height/2;
        let center = new Vector(circleX, circleY),
            axes = [ ... target.axes]

        //获取小球和最近的精灵顶点连线的平行轴
        let minDistance, launcherAxes
        target.points.forEach( p => {
            let v = p.sub(center), d = v.getLength()
            if(minDistance === undefined || minDistance > d){
                minDistance = d;
                launcherAxes = v.normalize();
            }
        });
        axes.push(launcherAxes)
        //将小球和目标分别投影在各个轴上，看投影是否重叠
        for(let i=0; i<axes.length; i++){
            //小球投影
            let lmin = axes[i].dotProduct(center) - this.width/2,
                lmax = axes[i].dotProduct(center) + this.width/2
            
            let projection1 = new Projection(lmin,lmax)
            
            //目标投影
            let dp = []
            target.points.forEach( p => {
                dp.push(p.dotProduct(axes[i]))
            })

            let tmin = Math.min(... dp), tmax = Math.max(... dp)
            let projection2 = new Projection(tmin, tmax)

            if(!projection1.overlaps(projection2)){
                return false
            } 
        }

        return true
    }
}