/* === HTML TEMPLATE === */
<template>
  <div
    class="icon arrow-small-container"
    :style="transform"
    v-on="$listeners"
  >
    <svg
      :class="{
        'arrow-small': true,
        left: direction === 'left',
        right: direction === 'right',
        up: direction === 'up',
        down: direction === 'down'
      }"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        class="arrow-small__path"
        fill-rule="evenodd"
        d="M37.602,18.543 L0.485,37.066 L0.485,0.019 L37.602,18.543 Z"
      />
    </svg>
  </div>
</template>

/* === SCSS STYLES === */
<style lang="scss">
@import 'settings';

.icon.arrow-small-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow-small {
    width: rem-calc(38);
    height: rem-calc(38);

    &__path {
      fill: get-color(primary);
    }
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
          rot = '180';
          break;
        case 'right':
          rot = '0';
          break;
        case 'up':
          rot = '-90';
          break;
        case 'down':
          rot = '90';
          break;
        default:
          rot = '0';
      }
      return {
        transform: `rotate(${rot}deg)`,
        transformOrigin: 'center',
      };
    },
  },
};
</script>
