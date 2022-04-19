<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      action="http://120.24.89.238:8003/eduoss/fileoss/2"
      multiple
      :on-success="demo"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'VueHealthcareTest',

  data () {
    return {}
  },
  created () {
  },
  methods: {
    demo (res) {
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
