<template>
  <canvas
    v-insert-message
    width="1024"
    height="800"
/></template>

<script>
import { drawGrid, createTriangle } from '../utils/index.js'

export default {
  directives: {
    insertMessage: function (canvasElement, binding) {
      // Get canvas context
      var context = canvasElement.getContext('2d')

      context.strokeStyle = '#00FF00'
      context.fillStyle = 'yellow'
      drawGrid(context, 10, 50, 'white', 'yellow')
      createTriangle(context)
    }
  }
}

</script>
<style scope>
canvas {
    background: black;
}
</style>
