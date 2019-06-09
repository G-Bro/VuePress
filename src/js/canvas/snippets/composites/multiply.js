ctx.clearRect(0, 0, cnv.width, cnv.height);

ctx.fillStyle = '#4CAF50';
ctx.fillRect(0, 0, 300, 300);

ctx.globalCompositeOperation = 'multiply';

ctx.fillStyle = '#4CAF50';
ctx.fillRect(100, 100, 300, 300);