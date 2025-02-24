<template>
  <div class="read-box">
    <div @click="Back" style="text-align: left; padding-left: 20px; margin-top: 10px;cursor: pointer;">{{ '< 返回' }}</div>
        <div>
            {{list.title || '这个id是什么玩意'}} <br>
            {{ list.author || '匿名'}}
        </div>
        <div style="text-align: left; padding: 20px; height: calc(100vh - 94px); overflow: auto;">
            {{list.content || '这个id是什么玩意'}}
        </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
 const router = useRouter();
 const route = useRoute();
 const list = ref({
    title: '',
    author: '',
    content: ''
 })
 const Back = () => {
    router.go(-1)
}
const getList = async () => {
    try {
        let res = await  axios.get(`https://tjv8e9kzo7.bja.sealos.run/article_list?id=${route.query.id}`)
        list.value = res.data.list || {
    title: '',
    author: '',
    content: ''
 }
    } catch (error) {
        ElMessage({
    message: error,
    type: 'error',
  })
    }
 
}
getList()
</script>

<style scoped lang="scss">
.read-box {
    height: 100vh;
    overflow: auto;
    background: RGB(250, 249, 222);
    color: #000;
}

</style>