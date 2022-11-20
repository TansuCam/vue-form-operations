<template>
  <button class="purple-button" @type={type}>{{name}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    name: String
  }  
}
</script>
