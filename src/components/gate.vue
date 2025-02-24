<template>
  <div class="app">
    <div class="doorWrap">
        <div class="leftDoor">寻找</div>
        <div class="rightDoor">宝藏</div>
        <div class="content"> <h1>欢迎光临呐，各位访客们。</h1></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
   h1 {
            width: 12em;
            animation: typingWords 3s steps(12) infinite, cursor 0.5s steps(1) infinite;
            white-space: nowrap;
            overflow: hidden;
            border-right: 1px solid #000;
        }

        @keyframes typingWords {
            0% {
                width: 0;
            }
        }

        @keyframes cursor {
            50% {
                border-color: transparent;
            }
        }
        /* 门容器样式 */
        .doorWrap {
            width: 50vw;
            height: 50vh;
            margin: 0 auto;
            border: 1px solid #666;
            perspective: 500px;
            position: relative;
            display: flex;
            margin-top: 16%;
        }

        /* 左门右门的共有样式 */
        .leftDoor,
        .rightDoor {
            width: 50%;
            height: 100%;
            background-color: rgb(194, 37, 37);
            transition: 1.2s;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            border: 1px solid #333;
        }

        /* 设置旋转元素的基点，左边大门以左侧为基准点旋转 */
        .leftDoor {
            transform-origin: left;
        }

        /* 设置旋转元素的基点，右边大门以右侧为基准点旋转 */
        .rightDoor {
            transform-origin: right;
        }

        /* 当鼠标悬浮的时候，设置开门的幅度，左门往左侧开 */
        .doorWrap:hover .leftDoor {
            transform: rotateY(-130deg);
        }

        /* 右门往右侧开 */
        .doorWrap:hover .rightDoor {
            transform: rotateY(130deg);
        }

        /* 内容区的定位层级稍微低一些 */
        .content {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: #abf;
            display: flex;
            justify-content: center;
            align-items: center;
        }
</style>