/* === HTML TEMPLATE === */
<template>
  <svg
    class="icon alert"
    width="100"
    height="84"
    viewBox="0 0 100 84"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>Alert</title>
    <g
      id="alert"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <path
        id="triangle"
        class="alert__triangle"
        d="M1.55806999,77.9735991 L46.5862395,1.95004661 C47.7074365,0.0570675775 50.1446013,-0.564833936 52.0297994,0.5609907 C52.5990492,0.900941961 53.0745918,1.37844728 53.4131457,1.95004661 L98.4413152,77.9735991 C99.5625122,79.8665781 98.943167,82.313802 97.0579689,83.4396266 C96.4437956,83.8064058 95.7424474,84 95.0278621,84 L4.97152309,84 C2.77811145,84 1,82.2145496 1,80.0120849 C1,79.2945502 1.1927984,78.5903073 1.55806999,77.9735991 Z"
      />
      <g
        v-if="$slots.default"
        class="alert__text"
        transform="translate(48 55)"
      >
        <slot />
      </g>
      <g
        v-else
        id="alert__bang"
        class="alert__text"
        transform="translate(44.000000, 25.000000)"
        fill="#FFFFFF"
      >
        <polygon
          id="alert__bang__top"
          points="0 0 13 0 11 35 2 35"
        />
        <rect
          id="alert__bang__bottom"
          x="2"
          y="41"
          width="9"
          height="9"
        />
      </g>
    </g>
  </svg>
</template>



/* === SCSS STYLES === */
<style lang="scss">
@import "settings";

.icon.alert {
  width: rem-calc(28);
  height: rem-calc(24);

  path {
    fill: get-color(alert);
  }

  .alert__text {
    text {
      @include primaryFontBold;
      font-size: rem-calc(48);
      fill: $white;
      color: $white;
      text-anchor: middle;
      text-align: center;
      dominant-baseline: middle;
      letter-spacing: rem-calc(-4);
    }
  }
}
</style>



/* === JS COMPONENT === */
<script>
export default {};
</script>
