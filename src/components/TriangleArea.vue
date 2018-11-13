<template>
  <div>
    <h1>Perimeter of a Triangle</h1>
    <input
      v-model="a"
      type="text"
      @input="calculateArea">
    <input
      v-model="b"
      type="text"
      @input="calculateArea">
    <input
      v-model="c"
      type="text"
      @input="calculateArea">
    <span class="count"> The Perimeter of your triangle is {{ perimeter }}</span>
    <canvas
      id="canvas"
      width="100"
      height="100"/>
    <button @click="paint">Paint</button>
  </div>
</template>

<script>
import { Perimeter } from '../utils/index.js'
export default {
  data () {
    return {
      a: 0,
      b: 0,
      c: 0,
      perimeter: 0,
      link: 'http://google.com'
    }
  },

  methods: {
    calculateArea: function (e) {
      console.log(parseInt(this.a), 'what')
      this.perimeter = Perimeter(parseInt(this.a), parseInt(this.b), parseInt(this.c))
    },

    paint: function (e) {
      var canvas = document.getElementById('canvas')
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d')
        var side = parseInt(this.a)
        var h = side * (Math.sqrt(3) / 2)

        ctx.strokeStyle = '#ff0000'

        ctx.save()
        ctx.translate(canvas.width / 2, canvas.height / 2)

        ctx.beginPath()

        ctx.moveTo(0, -h / 2)
        ctx.lineTo(-side / 2, h / 2)
        ctx.lineTo(side / 2, h / 2)
        ctx.lineTo(0, -h / 2)

        ctx.stroke()
        ctx.fill()

        ctx.closePath()
        ctx.save()
      }
    },

    draw () {

    }
  }
}
</script>
