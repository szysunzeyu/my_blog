<template>
  <div class="all">
    <div class="main">
        <div class="circle"></div>
        <h1 class="time_down">{{ time }}</h1>
        <p class="title">广告加载中，请稍后...</p>
        <p class="text">网络交易需谨慎</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 5,
      timer: null
    }
  },
  mounted () {
    this.countDown()
  },
  methods: {
    countDown () {
      this.timer = setInterval(() => {
        this.time--
        if (this.time === 0) {
          clearInterval(this.timer)
          window.location.href = 'http://www.baidu.com'
        }
      }, 1000)
    }
  }
}
</script>

<style>
.all {
    width: 100vw;
    height: 100vh;
}
.main {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-size: 400%;
    background-image: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    border-radius: 50%;
    animation: sun 4s infinite;
}
.circle::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: linear-gradient(to right,#03a9f4,#f441a5,#ffeb3b,#09a8f4);
    border-radius: 50%;
    filter: blur(25px);
}
.circle::after {
    content:'';
    position: absolute;
    width: 150px;
    height: 150px;
    background:#000;
    border-radius:50%
}
.time_down {
    color: white;
    font-weight:700;
    position: absolute;
}
.title {
    text-shadow: 0 0 30px #ffffff;
    color: white;
    font-size:2rem;
    font-weight:700;
    position: absolute;
    top: 10%;
    text-align:center;
}
.text {
    text-shadow: 0 0 30px #ffffff;
    color: white;
    font-size:2rem;
    font-weight:700;
    position: absolute;
    bottom: 10%;
    text-align:center;
}
@keyframes sun {
    100% {
        background-position: -400% 0;
    }
}
@media screen and (max-device-width: 800px) {

}
</style>
