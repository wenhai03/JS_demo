export class Projection {
    constructor(min, max){
        this.min = min;
        this.max = max;
    }

    overlaps(projection){
        return this.min < projection.max && this.max > projection.min
    }
}

export class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getLength(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    normalize(){
        let l = this.getLength()
        this.x = this.x / l
        this.y = this.y / l
        return this
    }

    add(vector){
        let v = new Vector()
        v.x = this.x + vector.x
        v.y = this.y + vector.y
        return v
    }

    sub(vector){
        let v = new Vector()
        v.x = this.x - vector.x
        v.y = this.y - vector.y
        return v
    }

    dotProduct(vector){
        return this.x * vector.x + this.y * vector.y
    }

}