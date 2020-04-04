<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Cryptid Online</h1>
              <h3 style="color: #404040;">More coming soon</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require(`@/assets/img/black-white-hexes.jpg`)
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style lang="scss">
</style>
