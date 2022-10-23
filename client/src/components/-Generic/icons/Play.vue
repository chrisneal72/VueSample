/* === HTML TEMPLATE === */
<template>
  <svg
    class="icon play"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 268.73 373.01"
  >
    <title>Play</title>
    <path
      d="M9.65,2.59A19.29,19.29,0,0,1,29,2.59l230.12,167.2a19.3,19.3,0,0,1,0,33.43L29,370.43A19.31,19.31,0,0,1,0,353.7V19.31A19.31,19.31,0,0,1,9.65,2.59"
      transform="translate(0 0)"
    />
  </svg>
</template>

/* === SCSS STYLES === */
<style lang="scss">
@import 'settings';

.icon.play {
  width: rem-calc(44);
  height: rem-calc(44);

  path: {
    fill: $white;
  }
}
</style>

/* === JS COMPONENT ===*/
<script>
export default {};
</script>
