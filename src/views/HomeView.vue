<template>
  <div class="home">
    <gate @click="open"></gate>

  </div>
</template>
<script setup>
import gate from '@/components/gate.vue'
import { useRouter } from 'vue-router';
 const router = useRouter();
 const open = () => {
    router.push({
path: '/composition',
});
}
</script>
