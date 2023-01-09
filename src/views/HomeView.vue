<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text="Pull down to refresh....." loosing-text="Release to refresh....." loading-text="please wait.....">
    <IndexBarList :list="AllList" @rearrange="rearrange"/>
  </van-pull-refresh>
</template>

<script>
import IndexBarList from '@/components/IndexBarList.vue'
import { getList } from '@/api/goodsList'
import { processingList } from '@/tools/processingStructure'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    IndexBarList
  },
  data () {
    return {
      AllList: {}, // Sort the data of the list
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['breedsList'])
  },
  created () {
    this.isLoading = true
    this.init()
  },
  methods: {
    init () {
      getList()
        .then((data) => {
          this.$store.dispatch('SaveBreedslist', data) // save return list data
          this.AllList = processingList(data) // Handle the returned data
          this.isLoading = false
        })
    },
    onRefresh () {
      this.init()
    },
    // Switching arrangement
    rearrange (val) {
      this.AllList = processingList(this.breedsList, val)
    }
  }
}
</script>
