console.log('moving obj file')

// class MovingObject {
    
//     constructor(pos, vel, radius, color) {
//         this.pos = pos;
//         this.vel = vel;
//         this.radius = radius;
//         this.color = color;
//     }

//     draw(ctx) {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
//         ctx.fill();
//     }
// };

function MovingObject (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
}

MovingObject.prototype.move = function() {
    // let [x, y] = this.pos
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
    this.draw(ctx)
}

export default MovingObject;