<template>
  <svg
    :class="{icon: true, heart: true, filled: filled}"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    preserveAspectRatio="xMidYMid meet"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    v-on="$listeners"
  >
    <!-- eslint-disable max-len -->
    <path
      class="heart-path"
      d="M22,41.7074303 C34.3809524,24.5645732 42,23.2293158 42,12.1836208 C42,1.13792579 27.7142857,-2.1020935 22,8.40068155 C16.2857143,-2.1020935 2,1.13792579 2,12.1836208 C2,23.2293158 9.61904762,24.5645732 22,41.7074303 Z"
    />
    <!-- eslint-enable max-len -->
  </svg>
</template>


<style lang="scss">
.icon.heart {
  width: rem-calc(44);
  height: rem-calc(44);
}
</style>


<script>
export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
