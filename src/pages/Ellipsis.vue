<template>
  <div class="page-ellipsis">
    <div class="ellipsis-container">
      <div class="ellipsis-notice">
        组件是自适应宽度的，拖动右下角改变宽度查看效果。
      </div>
      <div class="ellipsis-component">
        <ellipsis class="ellipsis" :content="content" :rows="rows" :btnText="btnText" :ellipsisText="ellipsisText"></ellipsis>
      </div>
      <div class="ellipsis-github">
        github[求star]：<a :href="link" target="_blank">{{ link }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import ellipsis from 'vue-overflow-ellipsis'
import "vue-overflow-ellipsis/dist/index.css"

const content = `
披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？
`

export default {
  components: {
    ellipsis
  },
  data () {
    return {
      content,
      rows: 6,
      btnText: '查看全部',
      ellipsisText: '...',
      link: 'https://github.com/Lushenggang/vue-overflow-ellipsis'
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-ellipsis
  display flex
  flex-direction column
  align-items center
  text-align center
  justify-content center
  &::before, &::after
    content ''
  &::before
    flex-grow 1
  &::after
    flex-grow 4
  .ellipsis-container
    .ellipsis-component
      width 400px
      resize horizontal
      border 1px solid rgba(64, 158, 255, 1)
      padding 10px 20px
      height auto
      overflow hidden
      .ellipsis
        font-size 16px
        line-height 2
    .ellipsis-notice
      padding 20px 0
    .ellipsis-github
      margin 10px 0
</style>