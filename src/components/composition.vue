<template>
  <div class="app">
    <br>
    <h1 style="text-align: right; padding-right: 20px; cursor: pointer;" @click="openAdd">添加文章</h1>
    <div class="essayCollection">
        <div class="btn2" @click="openDocument(item)" v-for="(item, index) in list" :key="index">
    <div class="title">{{ item.title }}</div>
    <div class="content" style="margin-bottom: 4px;     width:200px;
       word-break:break-all;
       display:-webkit-box;
       -webkit-line-clamp:2;
       -webkit-box-orient:vertical;
       overflow:hidden;">{{ item.content }}</div>
    <div class="content">{{moment(item.create_time).format('YYYY-MM-DD HH:mm:ss')}} | {{ item.author || '匿名' }}</div>
</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import moment from 'moment'
 const router = useRouter();
/**
 * 定义一个响应式的列表，用于存储文章列表数据
 */
 const list = ref([])
/**
 * 打开添加文章页面的方法
 * 此方法会触发路由跳转，将用户导航到添加文章的页面
 */
 const openAdd = () => {
    
    router.push({
path: '/readAdd',
});
}
const getList = async () => {

  let res = await  axios.get('https://tjv8e9kzo7.bja.sealos.run/article_all_list')
  list.value = res.data.list
  console.log(list.value)
}
getList()
 const openDocument = (item) => {
    router.push({
path: '/read',
query: { id: item._id }
});
}
</script>

<style scoped lang="scss">
.app {
   background: RGB(250, 249, 222);
   height: 100vh;
}

.btn2 {
    display: inline-block;
    border: none;
    color: #000;
    cursor: pointer;
    margin-bottom: 12px;
    background: #fff;
    position: relative;
    width: 800px;
    text-align: left;
    padding: 10px 20px;
}


.btn2::before,
.btn2::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    transition: all .2s linear;
    background: #666fff;
}

.btn2:hover::before,
.btn2:hover::after {
    width: 100%
}

.btn2:hover span::before,
.btn2:hover span::after {
    height: 100%
}

.btn2::before,
.btn2::after {
    transition-delay: 0s
}

.btn2 span::before,
.btn2 span::after {
    transition-delay: .2s
}

.btn2::before {
    right: 0;
    top: 0
}

.btn2::after {
    left: 0;
    bottom: 0
}

.btn2 span::before {
    left: 0;
    top: 0
}

.btn2 span::after {
    right: 0;
    bottom: 0
}

.btn2:hover::before,
.btn2:hover::after {
    transition-delay: .2s
}

.btn2:hover span::before,
.btn2:hover span::after {
    transition-delay: 0s
}
.essayCollection {
    margin-top: 20px;
    height: 91vh;
    overflow: auto;
}
.title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--juejin-font-1);
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-bottom: 4px;
}
.content {
    color: #8a919f;
    font-size: 13px;
    line-height: 22px;
}
</style>