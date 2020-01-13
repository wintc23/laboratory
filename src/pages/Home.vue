<template>
  <div class="page-container">
    <div class="header">
      <div class="author">木马tc</div>
      <div class="placeholder"></div>
      <a class="github" href="https://github.com/Lushenggang" target="_blank">
        <Icon type="logo-github"/>github
      </a>
      <a class="site" href="http://wintc.top/" target="_blank">
        <Icon type="ios-link" />个人网站
      </a>
    </div>
    <div class="page-content-container">
      <div class="page-menu">
        <div class="title">目录</div>
        <div class="menu-list">
          <div
            class="menu"
            v-for="(menu, idx) of menuList"
            @click.stop="clickMenu(menu)"
            :key="idx">
            {{ menu.title }}
          </div>
        </div>
      </div>
      <router-view class="page-content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          title: '树组件',
          name: 'Tree',
        },
        {
          title: '搜索高亮',
          name: 'SearchHighlight'
        },
        {
          title: '图片添加水印',
          name: 'Watermark'
        }
      ]
    }
  },
  methods: {
    clickMenu (menu) {
      if (menu.name === this.$route.name) return
      this.$router.push({ name: menu.name })
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-container
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  display flex
  flex-direction column
  .header
    height 64px
    background rgba(0, 135, 252, 1)
    flex-shrink 0
    display flex
    align-items center
    padding 0 20px
    font-size 18px
    .placeholder
      flex auto
    .author
      color #fff
      font-size 20px
    .github, .site
      margin 0 5px
      background rgba(255, 255, 255, .7)
      padding 5px 10px
      border-radius 4px
      color #333
      cursor pointer
  .page-content-container
    flex auto
    margin-top 1 0px
    border-top 1px solid #ccc
    overflow hidden
    .page-menu
      height 100%
      float left
      display flex
      flex-direction column
      border-right 1px solid #ccc
      .title
        width 15rem
        max-width 80vw
        flex-shrink 0
        font-size 20px
        line-height 2.5
        color rgb(64, 158, 255)
        font-weight bold
        border-bottom 1px solid #ccc
      .menu-list
        text-align left
        flex auto
        overflow auto
        padding 10px 0
        .menu
          line-height 2
          font-size 18px
          padding 5px 10px
          user-select none
          cursor pointer
          &:hover
            background #eee
    .page-content
      height 100%
      overflow hidden
      flex auto
</style>