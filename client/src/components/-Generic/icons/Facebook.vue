<template>
  <span
    class="social fb icon"
    v-on="$listeners"
  >
    <svg xmlns="http://www.w3.org/2000/svg" id="icon-facebook" viewBox="0 0 32 32">
            <title>facebook</title>
            <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
        </svg>
  </span>
</template>


<style lang="scss">
@import 'settings';

.icon.fb {
  .fb-image {
    width: rem-calc(24);
    height: rem-calc(24);

    @include breakpoint(medium) {
      width: rem-calc(16);
      height: rem-calc(16);
    }
  }
}
</style>


<script>
export default {};
</script>
