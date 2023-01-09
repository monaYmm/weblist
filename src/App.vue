<template>
  <div id="app">
    <RequestLoading/>
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import RequestLoading from '@/components/RequestLoading.vue' // Request loading effect

export default {
  components: {
    RequestLoading
  }
}
</script>
