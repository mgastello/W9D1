console.log('Webpack is working!')

import MovingObject from "./moving_object.js";

window.MovingObject = MovingObject;

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");
window.ctx = ctx;

// const mo = new MovingObject ([50,50], [10, 10], 69, "#00FF00")
// mo.draw(ctx)