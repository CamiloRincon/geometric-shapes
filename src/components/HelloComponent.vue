<template>
  <h2>Hello {{ name }} </h2>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style scope>
h1 {
  text-transform: uppercase;
}
</style>
