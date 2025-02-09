/*网页特效 - 星光，慢飘*/
var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,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";

function Star(x, y, s, r, fn) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.r = r;
  this.fn = fn;
}

Star.prototype.draw = function(cxt) {
  cxt.save();
  var size = 2 * this.s;
  cxt.translate(this.x, this.y);
  cxt.rotate(this.r);
  cxt.beginPath();
  cxt.arc(0, 0, size, 0, Math.PI * 2, false);
  cxt.fillStyle = "rgba(255, 255, 255, 0.8)";
  cxt.fill();
  cxt.restore();
}

Star.prototype.update = function() {
  this.x = this.fn.x(this.x, this.y);
  this.y = this.fn.y(this.y, this.y);
  this.r = this.fn.r(this.r);

  // 如果星光超出画布，则重置其位置
  if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
    this.x = getRandom('x');
    this.y = getRandom('y');
    this.s = getRandom('s');
    this.r = getRandom('r');
  }
}

StarList = function() {
  this.list = [];
}

StarList.prototype.push = function(star) {
  this.list.push(star);
}

StarList.prototype.update = function() {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].update();
  }
}

StarList.prototype.draw = function(cxt) {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].draw(cxt);
  }
}

StarList.prototype.get = function(i) {
  return this.list[i];
}

StarList.prototype.size = function() {
  return this.list.length;
}

function getRandom(option) {
  var ret, random;
  switch(option) {
    case 'x':
      ret = Math.random() * window.innerWidth;
      break;
    case 'y':
      ret = Math.random() * window.innerHeight;
      break;
    case 's':
      ret = Math.random() * 0.5 + 0.2;  // 星光大小介于0.2和0.7之间
      break;
    case 'r':
      ret = Math.random() * 6;  // 随机旋转角度
      break;
    case 'fnx':
      random = 0.05 + Math.random() * 0.1; // 减缓漂浮速度
      ret = function(x, y) {
        return x + random * Math.sin(Math.random() * Math.PI); // 星光在水平方向上随随机角度漂浮
      };
      break;
    case 'fny':
      random = 0.05 + Math.random() * 0.1; // 减缓漂浮速度
      ret = function(x, y) {
        return y - random;  // 向上漂浮
      };
      break;
    case 'fnr':
      random = Math.random() * 0.005;  // 更缓慢的旋转
      ret = function(r) {
        return r + random;  // 随机增加旋转角度
      };
      break;
  }
  return ret;
}

function startStars() {
  requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
  var canvas = document.createElement('canvas'),
    cxt;
  staticx = true;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
  canvas.setAttribute('id', 'canvas_stars');
  document.getElementsByTagName('body')[0].appendChild(canvas);
  cxt = canvas.getContext('2d');
  var starList = new StarList();
  for (var i = 0; i < 100; i++) {  // 增加星光数量
    var star, randomX, randomY, randomS, randomR, randomFnx, randomFny;
    randomX = getRandom('x');
    randomY = getRandom('y');
    randomR = getRandom('r');
    randomS = getRandom('s');
    randomFnx = getRandom('fnx');
    randomFny = getRandom('fny');
    randomFnR = getRandom('fnr');
    star = new Star(randomX, randomY, randomS, randomR, {
      x: randomFnx,
      y: randomFny,
      r: randomFnR
    });
    starList.push(star);
  }
  stop = requestAnimationFrame(function() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    starList.update();
    starList.draw(cxt);
    stop = requestAnimationFrame(arguments.callee);
  });
}

window.onresize = function() {
  var canvasStars = document.getElementById('canvas_stars');
  canvasStars.width = window.innerWidth;
  canvasStars.height = window.innerHeight;
}

function stopStars() {
  if (staticx) {
    var child = document.getElementById("canvas_stars");
    child.parentNode.removeChild(child);
    window.cancelAnimationFrame(stop);
    staticx = false;
  } else {
    startStars();
  }
}
