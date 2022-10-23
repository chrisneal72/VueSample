/* === HTML TEMPLATE === */
<template>
  <div
    class="icon arrow-container"
    :style="transform"
    v-on="$listeners"
  >
    <svg
      :class="{
        arrow: true,
        left: direction === 'left',
        right: direction === 'right',
        up: direction === 'up',
        down: direction === 'down'
      }"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <polyline
        points="10.3137085 30.3137085 10.3137085 14.3137085 26.3137085 14.3137085"
        stroke="#000000"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>


/* === SCSS STYLES === */
<style lang="scss">
.icon.arrow-container {
  display: inline-block;

  .arrow {
    width: rem-calc(44);
    height: rem-calc(44);
  }
}
</style>


/* === JS COMPONENT === */
<script>
const DIRECTIONS = ['left', 'right', 'up', 'down'];

export default {
  props: {
    direction: {
      validator(value) {
        return DIRECTIONS.indexOf(value) !== -1;
      },
      default: 'left',
    },
  },

  computed: {
    transform() {
      let rot;
      switch (this.direction) {
        case 'left':
          rot = '-45';
          break;
        case 'right':
          rot = '135';
          break;
        case 'up':
          rot = '45';
          break;
        case 'down':
          rot = '-135';
          break;
        default:
          rot = '0';
      }
      return {
        transform: `rotate(${rot}deg)`,
        transformOrigin: '50% 50%',
      };
    },
  },
};
</script>
