<template>
  <div class="doc">
    <div class="container">
      <!-- 左侧侧边栏 -->
      <div class="doc-menu">
        <!-- 列表区域 -->
        <div class="menu-list">
          <ul>
            <li
              v-for="(item, index) in leftMenu"
              :key="index"
              @click="handleTabs(index)"
              :class="{ active: index === tableIndex }"
            >
              <a href="javascript:;">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 中间主体内容 -->
      <div class="doc-main">
        <div class="doc-main-item" v-show="tableIndex === 0">
          <h1 class="doc-main-item-title">产品简介</h1>
          <div class="doc-main-item-desc">
            以海量的舌象大数据为基础，研究了舌象的预处理、舌象颜色代表色的提取、舌象的颜色和纹理特征的提取、舌象的苔质分割以及舌体图像的分类模型的设计，来辅助诊断及鉴别身体健康状况，并给出相应的病症调理方案。
          </div>
        </div>

        <div class="doc-main-item" v-show="tableIndex === 1">
          <h1 class="doc-main-item-title">体质报告</h1>
          <div class="doc-main-item-desc">
            以海量的舌象大数据为基础，研究了舌象的预处理、舌象颜色代表色的提取、舌象的颜色和纹理特征的提取、舌象的苔质分割以及舌体图像的分类模型的设计，来辅助诊断及鉴别身体健康状况，并给出相应的病症调理方案。
          </div>

          <div class="doc-item-inclination-title" style="margin-bottom: 10px">
            发病倾向
          </div>
          <div class="doc-item-inclination-content" style="margin-bottom: 20px">
            <div
              class="doc-item-inclination-content-three"
              v-for="(item, index) in resultList"
              :key="index"
            >
              {{ item.inclination }}
            </div>
          </div>

          <div class="doc-item-inclination-title" style="margin-bottom: 10px">
            总体特征
          </div>
          <div class="doc-item-inclination-content" style="margin-bottom: 20px">
            <div
              class="doc-item-inclination-content-three"
              v-for="(item, index) in resultList"
              :key="index"
            >
              {{ item.features }}
            </div>
          </div>

          <div class="doc-item-inclination-title" style="margin-bottom: 10px">
            食疗建议-宜
          </div>
          <div class="doc-item-inclination-content">
            <div
              class="doc-item-inclination-content-three"
              v-for="(item, index) in resultList"
              :key="index"
            >
              {{ item.dietaryAdviceSuitable }}
            </div>
          </div>
        </div>

        <div class="doc-main-item" v-show="tableIndex === 2">
          <h1 class="doc-main-item-title">舌形与说明</h1>
          <div class="doc-main-item-desc">
            以海量的舌象大数据为基础，研究了舌象的预处理、舌象颜色代表色的提取、舌象的颜色和纹理特征的提取、舌象的苔质分割以及舌体图像的分类模型的设计，来辅助诊断及鉴别身体健康状况，并给出相应的病症调理方案。
          </div>

          <div class="doc-item-inclination-title" style="margin-bottom: 10px">
            舌色含义具体说明
          </div>
          <div class="doc-item-inclination-content" style="margin-bottom: 20px">
            <div
              class="doc-item-inclination-content-three"
              v-for="(item, index) in tongueShape"
              :key="index"
            >
              {{ item.explain }}
            </div>
          </div>

          <div class="doc-item-inclination-title" style="margin-bottom: 10px">
            具体舌色
          </div>
          <div class="doc-item-inclination-content" style="margin-bottom: 20px">
            <div
              class="doc-item-inclination-content-three"
              v-for="(item, index) in tongueShape"
              :key="index"
            >
              {{ item.type }}
            </div>
          </div>
        </div>

        <div class="doc-main-item" v-show="tableIndex === 3">
          <h1 class="doc-main-item-title">调理建议</h1>
          <div class="doc-main-item-desc">
            以海量的舌象大数据为基础，研究了舌象的预处理、舌象颜色代表色的提取、舌象的颜色和纹理特征的提取、舌象的苔质分割以及舌体图像的分类模型的设计，来辅助诊断及鉴别身体健康状况，并给出相应的病症调理方案。
          </div>

          <div class="doc-item-inclination-title" style="margin-bottom: 10px">
            食疗忌食
          </div>
          <div class="doc-item-inclination-content" style="margin-bottom: 20px">
            <div
              class="doc-item-inclination-content-three"
              v-for="(value, key) in suggest"
              :key="key"
            >
              {{ value }}
            </div>
          </div>

          <div class="doc-item-inclination-title" style="margin-bottom: 10px">
            食疗宜食
          </div>
          <div class="doc-item-inclination-content" style="margin-bottom: 20px">
            <div
              class="doc-item-inclination-content-three"
              v-for="(value, key) in suggest"
              :key="key"
            >
              {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueHealthcareDoc',
  // 注册组件
  components: {},

  data () {
    return {
      // 记录当前几点的索引
      tableIndex: 0,

      // 左侧列表
      leftMenu: ['产品简介', '体质报告', '舌形与说明', '调理建议'],

      // 体制报告
      resultList: [
        {
          inclination:
            '易患结核病、色斑、肿瘤、高血压、高脂血症、糖尿病、便秘等病症。',
          features:
            '阴液少，以口燥咽干、手足心热等虚热表现为主要特征，体型偏瘦。',
          commonDiseases:
            '手脚心发热，平时总感觉口燥咽干，鼻头发干，总是感觉口渴爱吃冷饮，舌头发红，口干，唾液少，经常感觉头晕眼花，视物模糊耳鸣，失眠，大便干燥，小便短涩。',
          dietaryAdviceSuitable:
            '保证充足的睡眠时间，以藏养阴气，特别是秋冬季，更要注意保护阴精，多吃滋补机体阴气的食物。如：芝麻、绿豆、鸭肉、猪肉、猪皮、兔肉、牛奶、豆腐、乌贼、龟、鳖、螃蟹、牡砺、蛤俐、海哲、海参、苦瓜、甘蔗、木耳、银耳等。',
          conditioning:
            '阴虚质者多生内热，治以滋润脏腑，消除内热，故总体采用滋补肾阴之法。',
          typeName: '阴虚质',
          dietaryAdviceAvoid:
            '不宜吃温燥、辛辣、香浓的食物，同时阴虚质亚健康者应忌吃煎炸炒爆食品和脂肪含量过高食物。',
          dietaryAdvice: '阴虚质平时多吃滋补肾阴食物',
          directionName: '基本是',
          directionCode: 'basic',
          typeCode: 'b_yin_asthenia'
        },
        {
          inclination:
            '过敏体质者易患哮喘、荨麻疹等；遗传性疾病如血友病等；胎传性疾病如五迟、五软等。',
          features: '先天失常，以生理缺陷、过敏反应等为主要特征。',
          commonDiseases:
            '过敏体质者常见哮喘、风团、咽痒、鼻塞、喷嚏等；患遗传性疾病者有垂直遗传、先天性、家族性特征；患胎传性疾病者具有母体影响胎儿个体生长发育及相关疾病特征。',
          dietaryAdviceSuitable: '清淡、均衡，粗细搭配适当，荤素配伍合理。',
          conditioning:
            '临床对于先天性、遗传性疾病，或生理缺陷，一般无特殊调治方法。或从亲代调治，防止疾病遗传。过敏质者或益气固表，或凉血消风，总以纠正过敏体质为法。',
          typeName: '特禀质',
          dietaryAdviceAvoid:
            '蚕豆，白扁豆，牛肉，鹅肉，蟹，鲤鱼，茄子，酒， 辣椒， 浓茶， 咖啡等辛辣之品， 腥膻发物及含致敏物质的食物。',
          dietaryAdvice: '特禀质饮食宜清淡，均衡，粗细搭配适当，荤素配伍合理',
          directionName: '倾向是',
          directionCode: 'tendency',
          typeCode: 'h_allergic'
        }
      ],

      // 舌形与说明
      tongueShape: [
        {
          explain:
            '点是指鼓起于舌面的红色、白色、或黑色星点；刺是指芒刺，即舌面上的软刺及颗粒增大，形成尖峰，高起如刺，摸之棘手；舌边，映射肝胆变化，该部位点刺的病理基础为肝胆火旺，或肝胆湿热，热邪上循舌面，蒸灼血脉，形成高于舌面的星点。',
          type: '舌边点刺'
        },
        {
          explain:
            '点是指鼓起于舌面的红色、白色、或黑色星点；刺是指芒刺，即舌面上的软刺及颗粒增大，形成尖峰，高起如刺，摸之棘手；舌尖，映射心脏变化，该部位点刺的病理基础为心火旺盛，热邪上循舌面，蒸灼血脉，形成高于舌面的星点。',
          type: '舌尖点刺'
        },
        {
          explain: '舌体瘦小而薄。主气血不足、阴虚火旺',
          type: '瘦薄舌'
        }
      ],

      // 调理方案
      program: {
        specificProgram: [
          {
            moxibustionOrder: '1',
            acupointHealth: [
              {
                acupointPic:
                  'https://xunai-base.oss-cn-shenzhen.aliyuncs.com/baseData/acupoint/zh_CN/img_long/acu_54_long.png',
                moxibustionDuration: '灸15分钟',
                acupointName: '太溪穴 (双穴)'
              },
              {
                acupointPic:
                  'https://xunai-base.oss-cn-shenzhen.aliyuncs.com/baseData/acupoint/zh_CN/img_long/acu_246_long.png',
                moxibustionDuration: '灸15分钟',
                acupointName: '涌泉穴 (双穴)'
              },
              {
                acupointPic:
                  'https://xunai-base.oss-cn-shenzhen.aliyuncs.com/baseData/acupoint/zh_CN/img_long/acu_138_long.png',
                moxibustionDuration: '灸15分钟',
                acupointName: '三阴交穴 (双穴)'
              }
            ]
          }
        ]
      },

      // 调理建议
      suggest: {
        foodWorse:
          '禁食温燥的水果、调味品等，如荔枝、龙眼、榴莲、芒果、八角、花椒、肉桂、狗肉、羊肉、雀肉、海马、海龙、獐肉、锅巴、炒花生、炒黄豆、炒瓜子、爆米花、佛手柑、杨梅、大蒜、韭菜、芥菜、辣椒、薤白、胡椒、砂仁、荜茇、草豆蔻、花椒、肉桂、白豆蔻、大茴香、小茴香、丁香、酒、烟、红参、肉苁蓉、锁阳等等，也不要吃辛辣刺激、高脂肪、高热量等油腻的食品。',
        foodBetter:
          '凡阴虚体质者，宜多吃些清补类食物，宜食甘凉滋润、生津养阴的食品，宜吃新鲜蔬菜水果或纤维素及维生素较高的食物，宜吃含优质蛋白质丰富的食品，如糯米、绿豆、藕、马兰头、大白菜、黑木耳、银耳、豆腐、甘蔗、梨、西瓜、黄瓜、百合、山药、乌贼等。这些食品性味多甘寒性凉，都有滋补机体阴气的功效。可适当配合补阴药膳有针对性地调养。',
        medicine:
          '阴虚火旺主要特征为五心烦热、颧红、失眠盗汗、口燥咽干、眩晕、耳鸣、舌红少苔、脉细数等。中成药可用六味地黄丸。具体用药需要在专业医师的指导下服用。',
        food: '阴虚火旺属于一种慢性症状，这个跟身体的体质和各项器官的状况都有关系。在食物的选择上，可以选择一些滋阴补肾和清热降火的食物，例如蜂蜜、百合、枸杞、山药、大枣等，对于气血有着滋补的作用，同时又不会增加体内的火气。还可以选择一些有滋阴降火功能的药膳和汤品来尝试，例如生地黄汤汁来煮粥、百合山药莲藕汤、蜂蜜水、或者大枣粥、天门冬粥等，这些都是一些可以滋阴的汤品，尽可以尝试一下。'
      }
    }
  },
  async mounted () {},

  methods: {
    // 点击左侧侧边栏
    handleTabs (index) {
      this.tableIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./doc.scss";
@import "../../assets/scss/base.scss";
</style>
