
<template>
  <div class="full-width center-content">
    <HelloComponent name="Geometric Shapes" />
    <TriangleArea/>
  </div>
</template>
<script>

import HelloComponent from './components/HelloComponent.vue'
import TriangleArea from './components/TriangleArea.vue'

export default {
  components: {
    HelloComponent,
    TriangleArea
  }
}
</script>
