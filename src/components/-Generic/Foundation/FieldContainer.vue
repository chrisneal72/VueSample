/* === HTML TEMPLATE === */
<template>
  <div class="grid-x align-center">
    <div
      class="cell small-12"
      :class="cellClass"
    >
      <fieldset>
        <div>
          <slot />
        </div>
      </fieldset>
    </div>
  </div>
</template>

/* === SCSS STYLES === */
<style lang="scss">
// @import 'settings';
</style>

/* === JS COMPONENT === */
<script>
export default {
  name: 'FieldContainer',
  props: {
    med: {
      type: String,
      required: true,
      default: '8',
    },
    large: {
      type: String,
      required: true,
      default: '6',
    },
  },
  computed: {
    cellClass() {
      return `medium-${this.med} large-${this.large}`;
    },
  },
};
</script>
