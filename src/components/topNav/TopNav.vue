<template>
  <div class="top-nav">
    <div class="container">
      <!-- logo区域 -->
      <div class="logo">这里放logo啊</div>

      <!-- 导航列表区域 -->
      <div class="nav-lists">
        <!--item项 -->
        <div class="top-nav-item apply">
          <span class="top-nav-item-text">开放能力</span>
          <div class="children">
            <!-- 第一个item项目 -->
            <div class="menu-item">
              <div class="menu-item-title">人脸与人体识别</div>
              <ul class="menu-item-lists">
                <li>
                  <a href="/#/apply/1">舌诊</a>
                </li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
              </ul>
            </div>

            <div class="menu-item">
              <div class="menu-item-title">人脸与人体识别</div>
              <ul class="menu-item-lists">
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
              </ul>
            </div>
            <div class="menu-item">
              <div class="menu-item-title">人脸与人体识别</div>
              <ul class="menu-item-lists">
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
              </ul>
            </div>
            <div class="menu-item">
              <div class="menu-item-title">人脸与人体识别</div>
              <ul class="menu-item-lists">
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
              </ul>
            </div>
            <div class="menu-item">
              <div class="menu-item-title">人脸与人体识别</div>
              <ul class="menu-item-lists">
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
                <li>人脸对比</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="top-nav-item">
          <span class="top-nav-item-text">开放能力</span>
        </div>

        <div class="top-nav-item">
          <span class="top-nav-item-text">开放能力</span>
        </div>

        <div class="top-nav-item">
          <span class="top-nav-item-text">开放能力</span>
        </div>

        <div class="top-nav-item">
          <span class="top-nav-item-text">开放能力</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HealthcareTopnav',

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.top-nav {
  width: 100%;
  height: 60px;
  background: #000000;
  line-height: 60px;
  position: relative;
  //   容器
  .container {
    margin: 0 auto;
    width: 1180px;
    height: 60px;
    // logo区域
    .logo {
      width: 200px;
      height: 100%;
      background: yellow;
      float: left;
    }
    // 导航列表区域
    .nav-lists {
      display: flex;
      .apply {
        &:hover .children {
          height: 400px;
          opacity: 1;
        }
      }
      // 显示与隐藏区域
      .children {
        display: flex;
        justify-content: space-between;
        position: absolute;
        border: 1px solid;
        width: 100%;
        top: 60px;
        background: #fff;
        left: 0px;
        padding: 20px 50px;
        height: 0;
        opacity: 0;
        overflow: hidden;
        .menu-item {
          width: 150px;
          .menu-item-title {
            color: #626262;
            font-size: 18px;
            border-bottom: 1px solid #f0f0f0;
            &:hover {
              cursor: pointer;
            }
          }
          .menu-item-lists {
            margin-top: 30px;
            li {
              color: #646464;
              font-size: 14px;
              width: 150px;
              height: 45px;
              padding-left: 10px;
              margin: 2px 0px;
              text-align: left;
              line-height: 45px;
              &:hover {
                color: #23a3ff;
                cursor: pointer;
                background: #f7f7f7;
              }
            }
          }
        }
      }
    }
    // 导航 item项
    .top-nav-item {
      .top-nav-item-text {
        display: inline-block;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        padding: 0 10px;
        margin: 0 20px;
        &:hover {
          color: #3b85f5;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
