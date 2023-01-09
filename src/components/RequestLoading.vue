<template>
  <div class="main">
    <van-loading type="spinner" color="#1989fa" v-if="requestLoading"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RequestLoading',
  computed: {
    ...mapGetters(['requestLoading'])
  }
}
</script>
<style scoped lang="scss">
.main{
  text-align: center;
}
</style>
