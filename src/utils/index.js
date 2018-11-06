export function drawGrid (ctx, minor, major, stroke, fill) {
  console.log('aca')
  minor = minor || 10
  major = major || minor * 5
  stroke = stroke || '#00FF00'
  fill = fill || '#009900'
  ctx.save()
  ctx.strokeStyle = stroke
  ctx.fillStyle = fill
  let width = ctx.canvas.width
  let height = ctx.canvas.height
  for (var x = 0; x < width; x += minor) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.lineWidth = (x % major === 0) ? 1.1 : 0.5
    ctx.stroke()
    if (x % major === 0) {
      ctx.fillText(x, x, 10)
    }
  }
  for (var y = 0; y < height; y += minor) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.lineWidth = (y % major === 0) ? 1.1 : 0.5
    ctx.stroke()
    if (y % major === 0) {
      ctx.fillText(y, 0, y + 10)
    }
  }
  ctx.restore()
}

export function createTriangle (context) {
  context.beginPath()
  context.moveTo(200, 100)
  context.lineTo(100, 300)
  context.lineTo(300, 300)
  context.closePath()
  context.fillText('(200, 100)', 200, 100)
  context.fillText('(100, 300)', 100, 300)
  context.fillText('(300, 300)', 300, 300)
  context.fillStyle = '#FFCC00'
  context.lineWidth = 2
  context.strokeStyle = '#FFF'
  context.stroke()
}
