<template>
  <div class="page-container">
    <div class="header">
      <div class="author">Muma Demo</div>
      <div class="placeholder"></div>
      <a class="github" href="https://github.com/Lushenggang/laboratory" target="_blank">
        <Icon type="logo-github"/>
        <span>github</span>
      </a>
      <a class="site" href="http://wintc.top/" target="_blank">
        <Icon type="ios-link" />
        <span>个人网站</span>
      </a>
    </div>
    <div class="page-content-container">
      <div :class="['hover-btn', show ? 'show' : 'hide']" @click.stop="clickBtn()">
        <Icon type="ios-arrow-dropright-circle" />
      </div>
      <div
        :class="['page-menu', show ? 'show' : 'hide']">
        <div class="title">目录</div>
        <div class="menu-list">
          <div
            :class="{
              menu: true,
              current: menu.name === routeName
            }"
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
          title: '文章目录生成',
          name: 'Outline'
        },
        {
          title: '搜索高亮',
          name: 'SearchHighlight'
        },
        {
          title: '图片添加水印',
          name: 'Watermark'
        },
        {
          title: '圆环进度环',
          name: 'CircleProgress'
        },
        {
          title: '树组件',
          name: 'Tree',
        }
      ],
      show: true
    }
  },
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    clickMenu (menu) {
      if (menu.name === this.$route.name) return
      this.$router.push({ name: menu.name })
    },
    clickBtn () {
      this.show = !this.show
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
    overflow hidden
    margin-top 1 0px
    border-top 1px solid #ccc
    display flex
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
          &.current
            color rgba(49, 118, 255, 1)
            background rgba(64, 158, 255, .1)
    .page-content
      height 100%
      flex auto
      overflow hidden
@media screen and (min-width: 480px)
  .page-content-container
    .hover-btn
      display none

@media screen and (max-width: 480px)
  .header
    a
      span
        display none
  .page-content-container
    position relative
    .hover-btn
      position absolute
      top -3px
      left -3px
      color rgba(0, 0, 0, .6)
      font-size 40px
      line-height 1
      z-index 3
      transition all .3s ease-out
      &.show
        transform rotate(180deg)
    .page-menu
      position absolute
      top 0
      bottom 0
      left 0
      z-index 2
      background #fff
      transition all .3s ease-out
      &.hide
        transform translateX(-100%)
</style>