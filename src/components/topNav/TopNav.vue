<template>
  <div class="top-nav-wrap">
    <div class="top-nav">
      <div class="container">
        <!-- logo区域 -->
        <div class="logo">这里放logo啊</div>

        <!-- 导航列表区域 -->
        <div class="nav-lists">
          <!--item项 -->
          <div class="top-nav-item">
            <span class="top-nav-item-text">开放能力</span>

            <!-- 这里先不要了，自己写个简易版本的先 -->
            <div class="children">
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

            <!-- <div class="children">我是children哦哦哦</div> -->
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
.top-nav-wrap {
  width: 100%;
  height: 60px;
  .top-nav {
    width: 100%;
    height: 60px;
    background: #000000;
    line-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
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
        & > div:first-child {
          position: relative;
        }
        & > div:first-child:hover {
          .children {
            height: 400px;
            transition: all 0.5s;
            opacity: 1;
          }
        }
      }
      // 导航 item项
      .top-nav-item {
        .children {
          width: 1180px;
          height: 0;
          background: #fff;
          position: absolute;
          opacity: 0;
          left: -200px;
          top: 60px;
          box-shadow: 2px 2px 2px #3b85f5;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          padding: 0px 20px;
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
}
</style>
