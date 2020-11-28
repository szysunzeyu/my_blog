<template>
  <div id="app">
    <vue-particles
      class="star_bg"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="2"
      :lineLinked="false"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
.star_bg {
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("https://some-1258503478.cos.ap-beijing.myqcloud.com/img/star.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#app {
  max-width: 100vw;
  max-height: 100vh;
  scrollbar-width: none;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
}
#app::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
