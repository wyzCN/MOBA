<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <router-link tag="div" to="/" class="iconfont icon-back text-blue"></router-link>
      <strong class="flex-1 text-ellipsis text-blue pl-2">
        {{ model.title }}
      </strong>
      <div class="text-grey fs-xs ml-2"> 2019-10-10 </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-link"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2 fs-lg">
        <router-link
          class="py-1 text-ellipsis"
          tag="div" :to="`/articles/${item._id}`"
          v-for="item in model.related" :key="item._id">
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {required: true}
    },
    data() {
      return {
        model: null
      }
    },
    watch: {
      id: 'fetch',
      // 上面简写
      // id() {
      //   this.fetch();
      // }
    },
    methods: {
      async fetch() {
        const res = await this.$http.get(`articles/${this.id}`)
        this.model = res.data
      }
    },
    created() {
      this.fetch()
    }
  }
</script>

<style lang="scss">
  .page-article {
    .body {
      img {
        max-width: 100%;
        height: auto;
      }
      iframe {
        width: 100%;
        height: auto;
      }
    }
  }
</style>