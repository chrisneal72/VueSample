/* === HTML TEMPLATE === */
<template>
  <div class="grid-x align-center">
    <div
      class="cell small-12"
      :class="cellClass"
    >
      <slot />
    </div>
  </div>
</template>

/* === SCSS STYLES === */
<style lang="scss">
// @import 'settings';
</style>

/* === JS COMPONENT === */
<script>
// import { mapState } from 'vuex'
export default {
  name: 'GridX',
  props: {
    med: {
      type: String,
      required: true,
      default: '8',
    },
    large: {
      type: String,
      required: false,
      default: '6',
    },
  },
  computed: {
    cellClass() {
      let cellClass = `medium-${this.med}`;
      if (this.large) {
        cellClass = `${cellClass} large-${this.large}`;
      }
      return cellClass;
    },
  },
};
</script>
