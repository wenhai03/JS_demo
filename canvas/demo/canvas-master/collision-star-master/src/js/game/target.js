import Sprite from "../base/sprite.js";
import { SpriteSheetPainter } from "../base/painter.js"
import { targetCells } from "../base/constant.js"
import { Vector } from "../base/formula.js"

export default class Target extends Sprite{
    constructor(image){
        super('target',new SpriteSheetPainter(image,targetCells),[
            {
                execute: (sprite,ctx,time) => {
                    sprite.painter.advance();
                }
            },
            {
                execute: (sprite,ctx,time) => {
                    sprite.resetLocation()
                }
            },
        ])
        this.height = 40;
        this.width = 40;

        //每条边的法向量作为投影轴，这里比较简单，就是x、y轴
        this.axes = [new Vector(0,1),new Vector(1,0)]
        
        this.resetLocation()
    }

    resetLocation(){
        this.top = parseInt(Math.random() * 200 + 30);
        this.left = parseInt(Math.random() * 300 + 30);
        this.points = [
            new Vector(this.left, this.top),
            new Vector(this.left + this.width, this.top ),
            new Vector(this.left, this.top + this.height),
            new Vector(this.left + this.width, this.top + this.height),
        ]
    }
}