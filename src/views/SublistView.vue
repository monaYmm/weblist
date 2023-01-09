<template>
  <div>
    <div class="back-page-icon" @click="backPage"><van-icon name="revoke" color="#1989fa"  size="30"/></div>
    <IndexBarList :list="AllList" @rearrange="rearrange" :toLink="false"/>
  </div>
</template>
<script>
import IndexBarList from '@/components/IndexBarList.vue'
import { processingList } from '@/tools/processingStructure'
import { mapGetters } from 'vuex'

export default {
  name: 'SublistView',
  components: {
    IndexBarList
  },
  data () {
    return {
      AllList: {}
    }
  },
  computed: {
    ...mapGetters(['breedsList']),
    subName () {
      return this.$route.params.name
    }
  },
  created () {
    const subList = this.breedsList[this.subName] // Secondary directory list data
    this.AllList = processingList(subList) // Process secondary list data
  },
  methods: {
    backPage () {
      this.$router.back()
    },
    // Switching arrangement
    rearrange (val) {
      this.AllList = processingList(this.breedsList[this.subName], val)
    }
  }
}
</script>
<style scoped lang="scss">
.back-page-icon{
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 99;
}
</style>
