<template>
  <button
    class="button"
    @click="$emit('handle-click')"
  >
    <span v-text="label" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    padding: 10px 12px;
    background-color: #333;
    width: 100%;
    span {
      color: white;
      font-size: 1rem;
    text-transform: uppercase;
    }
  }
</style>
