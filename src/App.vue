
<template>
  <div class="full-width center-content">
    <HelloComponent name="Geometric Shapes" />
    <Canvas/>
  </div>
</template>
<script>
import HelloComponent from './components/HelloComponent.vue'
import Canvas from './components/Canvas.vue'
export default {
  components: {
    HelloComponent,
    Canvas
  }
}
</script>
