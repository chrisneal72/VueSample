/* === TEMPLATE === */
<template>
  <div class="scroll-container">
    <div :class="{ offcanvas: true, 'offcanvas--open': isMenuOpen }">
      <!-- NAV MENU -->
      <div
        :class="{ 'nav-container': true, offcanvas__menu: $device.isMobile }"
      >
        <hamburger
          v-if="$device.isMobile && (!isPre && !isPost)"
          @click.stop="toggleMenu"
          :open="isMenuOpen"
        />

        <nav
          :class="{
            'main-nav': !$device.isMobile,
            offcanvas__menu__content: $device.isMobile,
          }"
        >
          <ul @click="closeMenu" class="grid-container main-nav__links">
            <!-- NAV LINKS -->
            <li>
              <router-link
                :id="makeLinkId('Landing')"
                class="main-nav__link"
                :to="{ name: 'Landing' }"
              />
            </li>
            <li v-for="(link, i) in links" :key="i">
              <router-link
                :id="makeLinkId(link.route.name)"
                class="main-nav__link"
                :to="link.route"
              >
                {{ link.anchorText }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- CONTENT -->
      <nav
        v-if="$device.isMobile"
        class="main-nav main-nav--mobile"
      >
        <router-link
          :id="makeLinkId('Landing-mobile')"
          class="main-nav__link"
          :to="{ name: 'How It Works' }"
        />
      </nav>
      <div
        @click.stop="closeMenu"
        :class="{
          'content-container': true,
          offcanvas__content: $device.isMobile,
        }"
      >
        <div
          :class="{
            'content-container__content': true,
            'mobile-content': $device.isMobile,
          }"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>


/* === SCSS STYLES === */
<style lang="scss">
// @import "../../scss/settings";

$timing: cubic-bezier(0.4, 0, 0.2, 1);
$black: #000000;
$white: #ffffff;
$pink: #0000ff;

.white-btn {
  color: $black;
  background-color: $white;
}

.scroll-container {
  overflow-y: hidden;
}

.offcanvas {
  overflow-y: visible;
  max-width: 100%;

  &__content,
  &__menu {
    transition: transform 320ms $timing;
    width: 100%;
  }

  &__content {
    .mobile-content {
      padding-top: 5.7rem;
    }
  }

  &__menu {
    position: relative;
    z-index: 110;
    pointer-events: none;

    .prof-mob {
      position: fixed;
      left: 4vw;
      top: 0.7rem;
    }

    .hamburger {
      position: fixed;
      top: 3rem;
      right: 4vw;
      pointer-events: initial;
      background-color: transparent;
    }

    &__content {
      width: rem-calc(180);
      position: fixed;
      opacity: 0;
      top: -500px;
      z-index: 9;
      padding: rem-calc(28);
      background-color: $black;
      border: 4px solid $pink;
      transition: opacity .5s;
    }
  }

  &--open {
    overflow-x: hidden;

    .offcanvas__menu__content {
      top: 5.4rem;
      opacity: 1;
      right: 0;

      #nav-link--landing {
        display: none;
      }

      .main-nav__links li {
        text-align: left;

        &:not(.signin-register) {
          width: 100%;
        }
      }

      .main-nav__link {
        text-transform: none;
      }
    }
  }
}

.desk-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav-link--landing {
  display: block;
  width: 144px;
  height: 44px;
  background: url(../../images/header-logo.png) no-repeat top center/contain;    
  margin-top: -6px;
}

#nav-link--landing-mobile {
  display: block;
  width: 144px;
  height: 66px;
  background: url(../../images/header-logo-mob.png) no-repeat top center/contain;
}

#nav-link--landing {
  @include breakpoint(medium down) {
    margin-bottom: 1.5rem;
  }
}

.nav-container {
  @include breakpoint(large) {
    z-index: 1;
    position: relative;
    box-shadow: 0 5px 15px 3px rgba(3, 4, 4, 0.11);
  }
}

.main-nav {
  background-color: $black;
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 5px solid $pink;

  .button {
    height: rem-calc(35);
    width: rem-calc(134);
  }

  &.main-nav--mobile {
    justify-content: center;
  }

  &__links {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    width: 100%;
    pointer-events: initial;

    li {
      line-height: 1.15;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }

  &__link {
    color: $white;
    cursor: pointer;
    font-size: rem-calc(15);
    padding: 0.75rem 0;

    @include breakpoint(large) {
      font-size: rem-calc(15);
    }

    &.router-link-active {
      color: $base-color;
    }

    &--profile {
      display: flex;
      justify-content: center;
      align-items: center;

    @include breakpoint(medium down) {
      justify-content: flex-start;
    }

      &:hover,
      &:focus {
        color: $secondary-color;
      }
    }
  }

  &__action {
    margin: 0 rem-calc(6);
    pointer-events: initial;

    @include breakpoint(840 down) {
      height: 2rem;
      margin: 0.25rem 0;
    }

    @include breakpoint(medium down) {
      margin: 0;

      &.white-btn {
        margin: 1rem 0 0;
      }
    }
  }

  &__profile {
    display: block;
    color: $base-color;
    @include primaryFont;

    img {
      margin-right: .4rem;
      margin-left: .4rem;
    }

    @include breakpoint(large) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &--alerts {
      position: relative;

      .alert {
        &__triangle {
          fill: get-color(alert);
        }

        &__text {
          @include primaryFont;
          font-size: 0.625rem;
          color: $white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          line-height: 1;
        }
      }
    }

    &--details,
    &--actions {
      font-size: 0.625rem;

      @include breakpoint(medium down) {
        text-align: center;
        margin: 10px 0;
        font-size: 0.75rem;
      }
    }

    &--points {
      background-color: $base-color;
      color: $white;
      padding: 0 rem-calc(16);
      display: flex;
      align-items: center;
      justify-content: center;
      height: rem-calc(35);

      @include breakpoint(large) {
        margin: 0 0.5rem;
      }

      @include breakpoint(medium down) {
        margin-top: .5rem;
      }

      &__amount {
        font-size: rem-calc(28);
        line-height: 1;
        margin-top: -5px;
        //max-width: 80px;
        //overflow: hidden;
        //text-overflow: ellipsis;
      }

      &__text {
        margin: 1px 0 0 0.25rem;
        font-size: rem-calc(15);
        text-transform: uppercase;
      }
    }

    &--details {
      text-align: right;
      line-height: 1.5;
    }

    &--actions {
      text-transform: uppercase;
      text-align: left;

      &.no-arf-notifications {
        line-height: 1.5;
      }
    }

    @include breakpoint(medium down) {
      flex-direction: column;

      &--details,
      &--actions {
        text-align: center;
      }

      &--details {
        line-height: 1;
      }

      &--points {
        padding: 0.25rem 0.5rem;
      }
    }
  }

  @include breakpoint(large) {
    &__links {
      li {
        margin: 0;
        line-height: 1.15;
        text-align: center;
      }
    }
  }

  @include breakpoint(medium down) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 91px;
    padding: 1rem;
    box-shadow: 0 5px 15px 3px rgba(3, 4, 4, 0.11);
    transition: left 320ms $timing;

    &__links {
      flex-direction: column;
      padding: 0;
    }

    &__profile {
      justify-content: flex-start;
    }
  }
}

.content-container {
  &__content {
    // min-height: calc(100vh - #{$nav-height});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.main-nav__links li.signin-register {
  margin: 1.5rem 0 0;

  @include breakpoint(large) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  @include breakpoint(840 down) {
    flex-direction: column;
  }
}

.sign-in {
  p {
      line-height: 1.2;
    }

    .lightbox__card {
    width: auto;

    .cta {
      margin: 1.825rem auto 0;
      height: rem-calc(40);
      max-width: rem-calc(195);
    }
  }

  .card-section {
    padding-bottom: 0;

    &.forgot-password {
      padding-top: .5rem;
    }
  }

  .card-divider {
    background-color: $black;
    padding: .5rem;
  }

  .lightbox__card__wrapper {
    width: rem-calc(425);

    h1 {
      font-size: rem-calc(26);
    }

    form {
      max-width: rem-calc(290);
      margin: 0 auto;
    }
  }
}
</style>


/* === JS COMPONENT === */
<script>

export default {
  data: () => ({
    isMenuOpen: false,
  }),

  computed: {
    links() {
      return [
        {
          route: { name: 'Reward Store' },
          anchorText: this.$i18n.t('components.nav.links.rewardStore'),
        },
        {
          route: { name: 'Dashboard' },
          anchorText: this.$i18n.t('components.nav.links.dashboard'),
        },
        {
          route: { name: 'How It Works' },
          anchorText: this.$i18n.t('components.nav.links.howItWorks'),
        },
        {
          route: { name: 'Offers' },
          anchorText: this.$i18n.t('components.nav.links.offers'),
        },
      ];
    },
  },

  methods: {
    toggleMenu(bool) {
      if (!this.$device.isMobile) return;
      this.isMenuOpen = typeof bool === 'boolean' ? bool : !this.isMenuOpen;
    },
    closeMenu() {
      if (!this.isMenuOpen) return;
      this.toggleMenu(false);
    },
    makeLinkId(routeName) {
      return `nav-link--${routeName.replace(/\W/g, '-').toLowerCase()}`;
    },
  },
};
</script>
