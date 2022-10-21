<template>
  <svg
    class="icon info"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    preserveAspectRatio="xMidYMid meet"
    v-on="$listeners"
  >
    <!-- eslint-disable max-len -->
    <path
      fill-rule="evenodd"
      d="M11.000,0.000 C4.925,0.000 -0.000,4.925 -0.000,11.000 C-0.000,17.075 4.925,22.000 11.000,22.000 C17.075,22.000 22.000,17.075 22.000,11.000 C22.000,4.925 17.075,0.000 11.000,0.000 ZM11.119,18.275 L7.891,18.275 L10.022,7.618 L13.250,7.618 L11.119,18.275 ZM13.560,6.046 L10.332,6.046 L10.829,3.542 L14.057,3.542 L13.560,6.046 Z"
    />
    <!-- eslint-enable max-len -->
  </svg>
</template>


<style lang="scss">
@import 'settings';

.icon.info {
  width: rem-calc(22);
  height: rem-calc(22);

  path {
    fill: $primary-color;
  }
}
</style>


<script>
export default {};
</script>
