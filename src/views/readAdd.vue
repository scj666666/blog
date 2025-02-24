<template>
  <div class="app">
     <h1>添加文章</h1>
     <div style="text-align: left;">
        
        标题  <el-input v-model="input" placeholder="请输入标题" /> <br>
        作者 <el-input v-model="author" placeholder="请输入作者名称" />
     内容：<br>
     <el-input
    v-model="textarea2"
    :autosize="{ minRows: 33, maxRows: 33 }"
    type="textarea"
    placeholder="请输入内容"
  />
  <div style="text-align: right; margin-top: 20px; margin-right: 20px;">
    <el-button type="success" style="width: 100px;" @click="add">提交</el-button>
  </div>
     </div>
   
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import moment from 'moment'
import axios from 'axios'
export default {
   data() {
      return {
         input: '',
         author: '匿名',
         textarea2: '',
      }
   },
   methods: {
      add() {
        try {
            if (this.input == '' || this.textarea2 == '' || this.author == '') {
                return       ElMessage({
    message: '请补充完整',
    type: 'error',
  })
            }
            var data = {
            title: this.input,
            author: this.author,
            content: this.textarea2,
            creationTime: moment().format('YYYY-MM-DD HH:mm:ss')
         }
         axios.post('https://tjv8e9kzo7.bja.sealos.run/add_article', data).then(res => {
            ElMessage({
    message: '添加成功',
    type: 'success',
  })
  this.input = ''
  this.textarea2 = ''
  this.author == '匿名'
         }, error => {
            ElMessage({
    message: error.msg,
    type: 'error',
  })
})
        } catch (error) {
            ElMessage({
    message: error.msg,
    type: 'error',
  })
        }
    
      }
   }    
}
</script>

<style lang="scss" scoped>
.app {
    text-align: center;
}
</style>