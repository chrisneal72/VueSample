<template>
  <svg
    class="icon check"
    width="19px"
    height="15px"
    viewBox="0 0 19 15"
    preserveAspectRatio="xMidYMid meet"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    v-on="$listeners"
  >
    <title>check</title>
    <g
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        transform="translate(-2.000000, -2.000000)"
        fill-rule="nonzero"
        fill="#979797"
      >
        <!-- eslint-disable max-len -->
        <path
          d="M5.23642643,9.63309409 C4.63503103,9.02668137 4.24376767,8.43801968 3.05858104,9.63309409 C1.87339441,10.8281685 2.45718564,11.2226961 3.05858104,11.8291088 L7.09988805,15.9041317 C7.70128345,16.5105444 8.67633804,16.5105444 9.27773344,15.9041317 L19.8600794,5.23349932 C20.4614748,4.62708659 21.1146513,4.30252314 19.8600794,3.03748459 C18.6055075,1.77244605 18.2836294,2.43107187 17.682234,3.03748459 L8.18881074,12.6101096 L5.23642643,9.63309409 Z"
          id="check"
        />
        <!-- eslint-ensable max-len -->
      </g>
    </g>
  </svg>
</template>

<style lang="scss">
@import 'settings';

.icon.check {
  width: rem-calc(19);
  height: rem-calc(15);

  path {
    fill: $primary-color;
  }
}
</style>


<script>

export default {};
</script>
