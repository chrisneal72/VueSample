<template>
  <svg
    class="icon destroy close-x"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    v-on="$listeners"
  >
    <g
      class="x"
      transform="rotate(45 15 15)"
    >
      <rect
        x="11"
        y="0"
        height="30"
        width="8"
        rx="2"
      />
      <rect
        x="0"
        y="11"
        height="8"
        width="30"
        ry="2"
      />
    </g>
  </svg>
</template>


<style lang="scss" scoped>
@import 'settings';

</style>


<script>
export default {};
</script>
