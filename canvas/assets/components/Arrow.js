/**
 * 绘制箭头类
 */

class Arrow {
  constructor(props){
    this.x = 0;
    this.y = 0;
    this.w = 60;
    this.h = 30;
    this.rotation = 90;
    this.fillStyle = 'rgb(165,16,83)';
    this.strokeStyle = 'rgba(0, 0, 0, 0)';
    Object.assign(this, props);
    console.log('this -> ', this)
    return this;
  }
  createPath(ctx){
    let {w, h} = this;
    ctx.beginPath();
    ctx.moveTo(-w/2, -h/2);
    ctx.lineTo(w/10, -h/2);
    ctx.lineTo(w/10, -h);
    ctx.lineTo(w/2, 0);
    ctx.lineTo(w/10, h);
    ctx.lineTo(w/10, h/2);
    ctx.lineTo(-w/2, h/2);
    ctx.closePath();
    return this;
  }
  render(ctx){
    let {fillStyle, strokeStyle, rotation, x, y} = this;
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    console.log('x, y -> ', x, y)
    ctx.translate(x, y);
  
    // ctx.rotate(45 * Math.PI / 180);
    
    ctx.rotate(rotation);
    this.createPath(ctx);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    return this;
  }
}
