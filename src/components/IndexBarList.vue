<template>
  <div class="bg">
     <van-index-bar :index-list="indexList">
      <div v-for="(item,key,index) in list" :key="index">
        <van-index-anchor :index="key"/>
        <div v-for="row in item" :key="row">
          <router-link :to=" hasSub(row)? '/subList/'+row : ''">
            <van-cell :value="row"  :is-link="hasSub(row)" :border="true"/>
          </router-link>
        </div>
      </div>
    </van-index-bar>
    <div class="sequence-icon" @click="rearrange()"><van-icon :name="reverseSequence?'ascending':'descending'" color="#1989fa" size="40"/></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexBarList',
  props: {
    list: {
      type: Object,
      default () {
        return {}
      }
    },
    toLink: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      reverseSequence: false // true:Positive sequence false:reverse order
    }
  },
  computed: {
    ...mapGetters(['breedsList']),
    indexList () {
      // Custom Sort Alphabet
      const barList = []
      for (const el of Object.keys(this.list)) {
        barList.push(el)
      }
      return barList
    }
  },
  methods: {
    // Switching arrangement
    rearrange () {
      this.reverseSequence = !this.reverseSequence
      // Callback to parent to process data
      this.$emit('rearrange', this.reverseSequence)
    },
    hasSub (row) {
      return this.toLink && !!this.breedsList[row]?.length // Whether jumping is allowed && whether there is a subdirectory
    }
  }
}
</script>
<style scoped lang="scss">
.sequence-icon{
  position: fixed;
  top: 50px;
  right: 10px;
}
.bg{
  background: #f9f9f9;
}
</style>
