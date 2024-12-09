<template>
<div class="write-container">
  <HeaderBar />
  <Write />
</div>
</template>

<script>
import Write from '@/components/Write/index.vue'
import HeaderBar from '@/components/Header/index.vue'
export default {
  name: 'WriteView',
  components: {
    Write,
    HeaderBar
  }
}
</script>