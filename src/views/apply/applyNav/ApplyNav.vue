<template>
  <div class="apply-nav">
    <!-- nav -->
    <div class="nav" :class="{ is_fixed: isFixed }">
      <div class="container base-container">
        <div class="apply-nav-item">人脸识别简介</div>
        <div class="apply-nav-item">产品视频演示</div>
        <div class="apply-nav-item">功能演示</div>
        <div class="apply-nav-item">相关推荐</div>
      </div>
    </div>

    <!-- panel -->
    <div class="panel">
      <!-- 人脸识别简介 -->
      <div class="panel-item-intro">
        <div class="base-container">
          <!-- 左侧 -->
          <div class="panel-item-intro-left">
            <div class="intro-title">
              <img src="./image/title-icon.svg" alt="" />
              人脸识别简介
            </div>
            <p class="intro-info">
              腾讯云神图·人脸识别（Face
              Recognition）基于腾讯优图强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸验证、人员查重、活体检测等多种功能，为开发者和企业提供高性能高可用的人脸识别服务。
              可应用于智慧零售、在线娱乐、智慧楼宇、在线身份认证等多种应用场景，充分满足各行业客户的人脸属性识别及用户身份确认等需求。
            </p>
          </div>
          <!-- 右侧 -->
          <div class="panel-item-intro-aside">
            <div class="aside-title">活动&公告</div>
            <ul class="aside-ul">
              <li class="aside-li">
                <i>优惠活动</i>
                AI人脸识别新用户特惠，10万次资源包仅售9.9元 >>
              </li>
              <li class="aside-li">
                <i>优惠活动</i>
                AI人脸识别新用户特惠，10万次资源包仅售9.9元 >>
              </li>
              <li class="aside-li">
                <i>优惠活动</i>
                AI人脸识别新用户特惠，10万次资源包仅售9.9元 >>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 产品视频演示 -->
      <div class="panel-item-video clearfix">
        <div class="base-container">
          <h3 class="intro-title">产品视频演示</h3>
          <!-- 图片占位 -->
          <div class="click-img">
            <span class="click-icon" @click="showSlide = true">
              <i class="iconfont icon-arrow-right-filling"></i>
            </span>
            <img src="./image/test.png" alt="" />
          </div>
          <!-- 视频部分 -->
          <div class="vide-box">
            <!-- 遮罩层 -->
            <div class="overlay" v-if="showSlide"></div>
            <!-- 弹出的视频 -->
            <div class="video" :class="{ slide: showSlide }">
              <!-- 视频右上角的叉号 -->
              <span class="icon-close" @click="showSlide = false">
                <i class="iconfont icon-close"></i>
              </span>
              <!-- muted 默认是静音播放 -->
              <video
                src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redmik40sb4bd68/video1-1.mp4"
                controls="controls"
                autoplay
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>

      <!-- 功能演示 -->
      <div class="panel-item-function">
        <div class="base-container">
          <h3 class="intro-title">功能演示</h3>
          <div class="function-content">
            <!-- 头部 -->
            <div class="function-content-head">
              <div class="function-content-head-title">核心能力</div>
              <div class="function-content-head--desc">
                对给定的人脸图片，检测人脸位置、人脸面部属性（包括性别、年龄、表情、魅力、眼镜、发型、口罩、姿态）、人脸质量信息（包括整体质量分、模糊分、光照分、五官遮挡分）。
              </div>
            </div>

            <!-- 身体 -->
            <div class="function-content-body">
              <div class="function-content-body-left">
                <div class="left-panel">
                  <div class="show-room">
                    <img :src="currentShowImg" alt="" class="showImg" />
                    <!-- <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAACuCAIAAAC0gZ0nAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAA90SURBVHic7d1/bNN3fsfxd6+R3IZKX6pJdsXFeGPCAU4x1xNOlkr5XjLhppMwYcEN1xG3WhdHqHNy17m5qpCArjF0KIlWBY+74oypmE5HSHMJ7ukAV0r6zdQsfFFpXF0As4v4Nll0ztRrv7oDaomJ/fG1DSRx4p987G9ej7++cb62P3c4z35/fPz9Pib/8U8EAMDOd1gPAABWO2QIABhDhgCAMWQIABhDhgCAMWQIABhDhgCAMWQIABhDhgCAMWQIABhDhgCAMWQIABhDhgCAMWQIABhDhgCAMWQIABh77N69e6zHAACrGraGAIAxZAgAGEOGAIAxZAgAGEOGAICxov/+3TTrMQDAqoatIQBgDPOGAIAxbA0BAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGPIEAAwhgwBAGNFrAeQc6IoBoPB2dnZ27dvsx4LFLzi4uKSkhKTyWQ2m1mPRT3UfLvEubm5wcHBmZkZ1gMBFdLr9fX19evWrWM9EDVQbYbm5ua8Xi+2gCB3iouLHQ4HSpQ51WbI4/HEt4Oqq6u3bNnCcRzbIYEKyLI8NTU1Ojqq/KjX651OJ9MRqYE6D1GLohhvUGNjY2VlJRoEWcFxXGVlZWNjo/LjzMyMKIpsh6QC6sxQMBhUFqqrq/V6PdvBgPro9frq6mplOf5hg7SpM0Ozs7PKwpYtW9iOBNQq/tGKf9ggberMUPzINPbFIEfiHy2cBsmcOjMEAAUEGQIAxpAhAGAMGQIAxpAhAGAMGQIAxpAhAGAMGQIAxpAhAGAMGQIAxtR/9cVHajrg+eg6ERFxFa/YzTn4JonY9X3nZxa7zfp8NW/8s0RrRcR/aXCPERFpd3d59xqzP45HITJ/ZeLan4iI1v5lhWmdJqknXe552uImIqL2i1+7cIXEgoAMZdUfgh2HlL8Bq9eWiwwFJ/xS6Iu+jvN9Id/N3h2J3uC68J4ghImInC2GNN6lr77Dn8Eok2Rq9na+oE38e1norXMMERFZ+66f2r3MmlDYkKGC8oVw9gtlyW6pTBy56UmlQUS28u8ltxHxkIg8IghpDC9F3N7cvwcUAhwbKiTBsbPRa9u8auUT7pGRHApGI1LDm7ANAXkPW0MFJCj8MlqhJkv5Mjt8oc/6lAVd1dY0dske4Oq/2VKe6Jd3w9LcWsP6lLe2wkMtFT95BPt8UDCQocIR3yPTuaw1SoXk0Njk7xeuNx84H10qfzwsjCWzd7V2U7lJu0RPnlyb+IpN0pmWH+67ZNztdB90WFKJUeSp5NeFVQEZKhQR4VceZVtI93d8RfSvPuTfWedO/Bz/oYbktjqs3t+esqVyg4nI5R7HPj8Rhf5zUqY0Dj8B3IdjQwUiMiH8h3LY2eT8W57x3/0t0fOWWyQi0jl/7rGtZzsaKHjYGioMcmCgR6nQ9iZrWfxhs/PmzaaHVowIb5e+fJKIyHTw4rlXk50x9ETycwtuiT0v2d2XlR/CnvpnPEk9DbN4ICFkqCBI5973KUtWG//gUWcNxz28ZRQM/VpZ0O2sMmf/Stx3pQGX3T0WzvbrwqqGDBWAyJjv8MexH4qeXG7V+zOGXjSXLbdiOu5KA85ax5kwEdHGpt4e6wqn4b70tzn7QkREZN7Pm7I9HFANZCj/zftP9iS5+TF/JRA9MfYqvzW7B5DkoGdfQ8f52EBu9Pk+et571JKwRF8J7rejDTLsPeVtM2cynEs9jroPklv1j1JsyXegXlim2SvN4YZHBxnKkUtd++p8qfy/a+0Ybnp2iccjl33HhpJ8DXny0+iZMetzW7O5Q/alv+0fXu67TERk2OvtrbrQvG9APNHgoP4lSxS54Wv7UatvmojI3Lz0OikJXxXCV1N9kiSOSMv8GnO48wcylCPh0Fg4lMoT+P1LPjzv/1f3UncFlQK9/uuLHhRORpe+/bTf8z+pvD0RGa3OF5bIxfzHHY0vepQbJJtfHz57kOfIdqGIapsGxBMNtV929v/CabrfPDn0QUeD0ycREen4g75Tr+fiG76gKshQXouMHGtfelNoPnioY5kZQ4GTHYFU32x/xZIZ0lY3Ne85K555wu7p79prVPatDLu9F+jJuiafdL7jh399qfPdbmeVNjIneFzNbmXHTcc7u3s7d2S4GRRlfXfi2C5dVl7qvhTODkJuIUM5wrv+3bXM174We+YvFj8W9B7xKAdjdDpdOMzo/FSRwea5YPzxWtPmh/5uDbt7P9lgdLzUEZj2d+z09202fns1FB1tletYX7sliwdenlpmOjcUPGQoR7hN5TyfyrzkxaQz3R3K9Byd88BPpVbXgzOiF80Yujt57G/qem4Qkc41ONHyg9Tfryjx33mRwbR5iYe5Zx1d3VKDvS9EJF2N7YO+0H7isJPHwV9IGjKUr+b87kNKd3S2f26p/b83Fvx+4YyhL4KBG8rSi/xzC2cTZZ18Qwj8xt//fl9getHvzrvrzrtpg9lazVtqaivKjQZtrocDhQ0Zyk/z/rfbBqLTpg+079LShys8QfosELsGSLZP1cfdkoLjovCbft+vA6EHdhB1m20OV7N9h0nzpXD2F17PyYBERNOif1r0n+xRVjFWlVY8azEaDRWVfHYOF4GKIEP56c43Xyl/6ObOg3YD0fwK60vCcHTC0PLXAEmZLIljwoWRgDh+Sbj68MEpndG2x9nQuNOyMfaGGy1NPZamo3JoPOA/c8L3gRg7YR4OjYVDYwKRqVNYadIjrD7IUH4y7HzF3vqxz3y425nMZOhpwT+iLFkrTFk9lMuR9GFrz4Nn6zaY7Tvs1sad/MYEu1pFnLHK5qqyud6NSFcFceTiOX/Af1kiItr7hr2MIilNZIBVABnKU1yVtWmb0f5acl+B+MN87PS83/G9px0pvld74GvXtkS/NFj/sd005P32Bavd9jxv5k3KpYXmBl7e1CVvqTBVG40bTAaDYev6ZxYekSrSGMoshjKLrZXo1nzo6oREPLfyll3cnTty7H9VU+nTTcuum8j+i1+34Ru1+Q4Zylcc7x6y5MORXc021yf/61rwSZGDE/5wiMIhYeTBhw3mGsOmMovJVGo0Gh8K0xqtcZs1xTuEzM+PrLwSqAAylLc0mjVJr/s4x9fwKb3676eEUPLzkBZ+TCJhmaw1/PWFLyKJI5I4ErveY03v54P29I8Eyd8surAkqBMypArPNg0PprDTIp1vc7wUjYV5/0Vnwj2yRDTGPV2n9hARUUSWw9KkJElXJoNXRGH8fphM2zO7ErYsx14p5YtDil1PP38kk/eGRwoZWnWkoda6v1e+80Xm/Rf9mX33nTQct97ErzdRlTX6yC1Zmp4MBoNPVGZ2bY+5a7H5mlsNmU0EhTyHDKnCrZBwdS2/beWZywsadDalBk0PtL7hozKL8bvPlG42GEqNujUct3jPcQ1nKOMNZantJC4W/Cx22H2HAVOy1Q0ZUoGIeNxZd0Q07Ors6rBbNiQ8Yb+4QSmd25+/cs43ItDIglt9GMw1pq3byktLFx2Wzog0ORKdj6n7gRFTjdQNGSp4kY/d9iMiEUlDHQ1DHv41d9dPbcZFgZE+dNQ2RSdmp9Egosi1317XES06rq0cln7w+27ROdNms2lT6SbjOu0SW0wrmhb8sQtOvvj90tSfD4UEGSp4mu2dE59u7X6z3TMWJgoLxx0Vx93Wn/V2v8ZrY/+80hlH7b5MGkREGv7gxLWDFJFleT50TZJCU9euXxEng4K48Gtl0TnTvtjP/LufD7+S2gZN8KO+2C6Z0/JcPsxbgBxChtSA22zrPGexf9jddsAjhIlI8h+q879vVS4DlI0G3afhOC1n1m4089tjDykny0Kh0KUJ4fJkcER8+KKHFltVijtVXwV8x2N7ZK9bKlAhtUOGVIMz7u4c3tEivPdG6yG/RESLLgOUeYOWFjtZxm+3KbMGIrJ0PRicHBMC/yVc0lj5DSm9XER8z90X3ffLg5uyQe4hQyu5Jct3k175mzvxxTuyLKdxTIToiTWcJu1/Fo2Wbz31iWUgto92/zJAuWrQkqPgDKYqg6nKak/9uZHLngNdscve7mppyPr9RSD/IEMrEI//eVoT4fytz/lb03rHZb/hlZRF+2hEROIvj/n+qttZldK574n+Xs9ERmNZwjdTia9Uf0twNyr3gyUic+c/2XCqfjVAhtSKM+7uHN5u9x1oaP1AIorto+3q7D2a/KURA32HUr6kdfruSgOuZk98EnbbYQc2hVYHZGgFGo7nax7pO3KPZ/G1jHbP57V7epwOdyBMRCQNddQN9Vl/5j3Wmm83zIgET7RG78VIRNvau3+c2fRuKBzI0ApMzcPDzawHkRltlat/wjpwxOk4oezufKv5rja5Brn6b7aUZ3s84aGWip/4Fz2sMb3W6w3WOs6ESWfz/pvLnNaRNShEyNDqwBltRy/yO3qcDnewuuvw7iTPoD+ZixtiRJ5K9BuDrccn/e4AveOxrc/2u0Iee+zevXusx5B9b775prLw1ltvsR1J3pHn54u02nze0LhbMP9xfOedd5SFo0ePsh1JoSuQf3DIFk6b7+ee8JFcfb7DegAAsNohQwDAGDIEAIwhQwDAGDIEAIypM0PFxcXKgizLy68JkJ74Ryv+YYO0qTNDJSUlysLU1BTbkYBaxT9a8Q8bpE2dGTKZoveEGB0dnZmZYTsYUJ+ZmZnR0VFlOf5hg7SpM0Nms1mv1yvLp0+fHh8fx94ZZIUsy+Pj46dPn1Z+1Ov1ZjNuTp0pdX6Zg4jm5ua8Xu/t27dZDwRUq7i42OFwrFuHm6hlSrUZIqK5ubnBwUHslEEu6PX6+vp6NCgr1JwhhSiKwWBwdnYWW0aQueLi4pKSEpPJhH2xLFJ/hgAgz6nzEDUAFBBkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAYQ4YAgDFkCAAY+3/Jdc6lItE+7wAAAABJRU5ErkJggg=="
                      alt=""
                      class="showImg"
                    /> -->
                    <!-- 扫描 -->
                    <div class="wrapper"></div>
                    <!-- 透明区域 -->
                    <span class="transparent-area">
                      <span class="transparent-area-left">
                        <p>图片文件类型</p>
                        <p>为了避免</p>
                        <p>注：Demo体验</p>
                      </span>
                      <span class="transparent-area-btn" @click="uploadImg">
                        本地上传
                        <input
                          type="file"
                          @change="fileChange"
                          ref="fileRef"
                          style="display: none"
                        />
                      </span>
                    </span>
                  </div>

                  <!-- 旋转木马 -->
                  <div class="carousel">
                    <ul class="carousel-ul">
                      <li
                        :class="{ 'active-border': currentImgIndex === index }"
                        class="carousel-li"
                        v-for="(item, index) in demoImgArr"
                        :key="index"
                        @click="changeImg(index)"
                      >
                        <img :src="item" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="function-content-body-right">
                <div class="right-panel"></div>
                右边
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { upload } from "@/api/index";
export default {
  name: 'VueHealthcareApplynav',

  data () {
    return {
      // demo图片数组
      demoImgArr: [
        require('./image/person.jpg'),
        require('./image/person2.jpg'),
        require('./image/person.jpg'),
        require('./image/person2.jpg'),
        require('./image/person.jpg')
      ],
      // 记录当前所选中的图片
      currentImgIndex: 0,
      // 当前所展示的图片
      currentShowImg: '',
      // 控制吸顶的
      isFixed: false,
      // 控制的遮罩层是否展示
      showSlide: false,
      // sheet
      sheet: {},
      // 当前动画正在执行的id
      currentMoveId: null,
      // 当前取消动画的id
      currentRemoveId: null
    }
  },

  mounted () {
    window.addEventListener('scroll', this.initHeight)
    setTimeout(() => {
      this.moveAnimation()
    }, 1000)

    setTimeout(() => {
      this.removeAnimation()
    }, 6000)
  },

  methods: {
    // 图片文件发生改变的时候触发
    fileChange (event) {
      for (const item of event.target.files) {
        const reader = new FileReader()
        reader.readAsDataURL(item)
        reader.addEventListener('load', async function () {
          console.log(this.result)
          this.currentShowImg = this.result
          // let result = await upload(this.result);
          // console.log(result);
        })
      }
    },
    // 点击上传图片图片
    uploadImg () {
      this.$refs.fileRef.dispatchEvent(new MouseEvent('click'))
    },
    // 扫描的动画封装
    moveAnimation () {
      const style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      document.head.appendChild(style)
      const sheet = style.sheet
      //  保存到state中
      this.sheet = sheet
      // console.log(this.sheet);
      sheet.insertRule(`
      @keyframes move {
          to {
              background-position: 0 100%, 0 0, 0 0, 0 0;
              /* 终止位置 */
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }`)
    },

    // 清除扫描动画
    removeAnimation () {
      this.sheet.removeRule(0)
      // console.log(this.sheet);
      // 展示关键点 todo
    },

    // 点击切换图片
    changeImg (index) {
      this.currentImgIndex = index
      this.currentShowImg = this.demoImgArr[index]
      // 切换图片后先清除上一个动画
      if (this.sheet.cssRules.length === 1) {
        // 说明还存在动画没有清除
        this.removeAnimation()
        this.currentMoveId = setTimeout(() => {
          this.sheet.insertRule(`
          @keyframes move {
              to {
                  background-position: 0 100%, 0 0, 0 0, 0 0;
                  /* 终止位置 */
                  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              }
            }`)
        }, 1000)
        this.currentRemoveId = setTimeout(() => {
          clearTimeout(this.currentMoveId)
          this.removeAnimation()
        }, 6000)
      } else {
        setTimeout(() => {
          this.sheet.insertRule(`
          @keyframes move {
              to {
                  background-position: 0 100%, 0 0, 0 0, 0 0;
                  /* 终止位置 */
                  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              }
            }`)
        }, 1000)
        setTimeout(() => {
          this.removeAnimation()
        }, 6000)
      }
    },
    // 滚动吸顶
    initHeight () {
      // 在谷歌中： document.pageYOffset  ===   document.documentElement.scrollTop
      // 在谷歌中获取滚动条滚动了多少,使用：  document.documentElement.scrollTop
      // 在IE中获取滚动条滚动了多少,使用：   document.body.scrollTop
      const scrollTop =
        document.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // console.log(scrollTop)
      this.isFixed = scrollTop >= 360
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./applyNav.scss";
@import "@/assets/scss/base.scss";
</style>
