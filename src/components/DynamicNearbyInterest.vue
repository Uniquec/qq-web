<template>
  <div class="dynamic-nearby-interest">
    <div class="dynamic-box">
      <img src="@/assets/qzone.png">
      <span>好友动态</span>
    </div>
    <div class="nearby-box">
      <img src="@/assets/location.png">
      <span>附近</span>
    </div>
    <div class="interest-box">
      <img src="@/assets/home.png">
      <span>兴趣部落</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DynamicNearbyInterest",
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .dynamic-nearby-interest {
    display: flex;
    background-color: #fff;
    border: 1px solid #ffffff;
    padding-bottom: 10px;
  }

  .dynamic-box,.nearby-box,.interest-box{
    width: 33%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    img{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }

    span{
      margin-top: 8px;
    }
  }
</style>
