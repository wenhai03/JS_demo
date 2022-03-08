// import Sprite from "../base/sprite.js"
// import { ballPainter, SpriteSheetPainter, StarPainter } from "../base/painter.js"
// import { targetCells } from "../base/constant.js"
// import { Projection, Vector } from "../base/collision.js"
import Launcher from "./launcher.js"
import Target from "./target.js"
import DrawStars from "./stars.js"

export default class Director {
    constructor(canvas,ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.baseRadius = 75;
        this.init();
    }

    init(){
        this.drawBase();
        this.drawLauncher();
        this.drawTarget();
        this.initEvent();
    }

    updateView(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.drawBase();
        this.launcher.paint(this.ctx);
        this.target && this.target.paint(this.ctx);
    }


    updateCollisionView(time){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.drawBase();
        this.drawStars.draw(this.ctx,time)
        if(this.drawStars.visible){
            window.requestAnimationFrame(this.updateCollisionView.bind(this))
        }else{
            this.launcher.collided = false
            this.launcher.resetLocation()
            this.target.update()
            this.updateView()
        }   
    }


    drawBase(){
        let x = this.canvas.width / 2,
            y = this.canvas.height,
            ctx = this.ctx

        ctx.save();
        ctx.strokeStyle = "gold";
        ctx.beginPath();
        ctx.arc(x,y,this.baseRadius,0,Math.PI,true);
        ctx.stroke();
        ctx.restore();
    }

    checkCollision(){
        return this.launcher.checkCollision(this.target)
    }

    drawLauncher(){
        this.launcher = new Launcher(
            this.canvas.width / 2,
            this.canvas.height - this.baseRadius
        )
        this.launcher.paint(this.ctx);
    }

    drawTarget(){
        let image = new Image()
        image.src = "res/spritesheet.png"
        image.onload = () => {
            this.target = new Target(image)
            this.target.paint(this.ctx)
        }
    }

    getVelocity(ev){
        const V = 500;
        let x1 = ev.offsetX, y1 = ev.offsetY;
        let dx = x1 - (this.launcher.left + this.launcher.width/2),
            dy = y1 - (this.launcher.top + this.launcher.height/2); //圆心位置
        let l = Math.sqrt(dx*dx + dy*dy)
        this.launcher.velocityX = parseInt(dx / l * V);
        this.launcher.velocityY = parseInt(dy / l * V);
    }

    initEvent(){
        this.canvas.addEventListener('mousemove', (ev) => {
            if(this.launcher.animating || (this.drawStars && this.drawStars.visible)) return
            let eventX = ev.offsetX, eventY = ev.offsetY,
                centerX = this.canvas.width / 2, centerY = this.canvas.height;
            
            let len = Math.sqrt(Math.pow((eventX-centerX),2) + Math.pow((eventY-centerY),2));
            let sin = (eventX-centerX) / len, cos = (centerY - eventY) / len

            this.launcher.left = this.canvas.width / 2 - this.launcher.width / 2 + this.baseRadius * sin;
            this.launcher.top = this.canvas.height - this.baseRadius * cos - this.launcher.height / 2;
            
            this.updateView()
        })

        this.canvas.addEventListener('click', (ev) => {
           
            if(this.launcher.animating || (this.drawStars && this.drawStars.visible)) return
            this.launcher.animating = true

            this.getVelocity(ev)

            const animate = (time) => {
                this.launcher.update(this.ctx,time)
                //检测目标碰撞
                if(this.checkCollision()){
                    this.launcher.collided = true
                    this.launcher.resetAnimation()
                }
                if(this.launcher.collided){
                    if(!this.drawStars){
                        this.drawStars = new DrawStars(
                            this.target.left + this.target.width/2,
                            this.target.top + this.target.height/2)
                    }else{
                        this.drawStars.reset(
                            this.target.left + this.target.width/2,
                            this.target.top + this.target.height/2)
                    }
                    this.updateCollisionView(time)
                }else{
                    this.updateView()
                }
                
                if(this.launcher.animating) {
                    window.requestAnimationFrame(animate)
                }
            }
            window.requestAnimationFrame(animate)
        })
    }
}