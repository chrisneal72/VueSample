/* === HTML TEMPLATE === */
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 431 512"
    class="icon copy"
  >
    <title>Copy</title>
    <path d="M271,512H80A80.09,80.09,0,0,1,0,432V161A80.09,80.09,0,0,1,80,81H271a80.09,80.09,0,0,1,80,80V432a80.09,80.09,0,0,1-80,80M80,121a40.05,40.05,0,0,0-40,40V432a40,40,0,0,0,40,40H271a40,40,0,0,0,40-40V161a40.05,40.05,0,0,0-40-40ZM431,382V80A80.09,80.09,0,0,0,351,0H129a20,20,0,0,0,0,40H351a40.05,40.05,0,0,1,40,40V382a20,20,0,0,0,40,0" />
  </svg>
</template>

/* === SCSS STYLES === */
<style lang="scss">
@import 'settings';
.icon.copy {
  width: rem-calc(43);
  height: rem-calc(43);
  path: {
    fill: $white;
  }
}
</style>

/* === JS COMPONENT ===*/
<script>
export default {};
</script>
