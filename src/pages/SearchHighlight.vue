<template>
  <div class="page-search-highlight">
    <div class="search-highlight-container">
      <div class="header">
        <div class="keyword">
          <div class="label">搜索</div>
          <Input
            @on-enter="checkKeydown"
            class="input"
            v-model="keyword"
            placeholder="输入关键字搜索" />
        </div>
        <div class="menu">
          <div class="current">{{ matchCount ? currentIdx : 0 }} / {{ matchCount }}</div>
          <Button type="primary" size="small" class="button" @click.stop="searchLast">上一个</Button>
          <Button type="primary" size="small" class="button" @click.stop="searchNext">下一个</Button>
        </div>
      </div>
      <search-highlight
        class="content-container"
        ref="search"
        @current-change="currentChange"
        @mactch-count-change="matchCountChange"
        :keyword="keyword"
        :content="content">
      </search-highlight>
    </div>
  </div>
</template>

<script>
import SearchHighlight from 'vue-search-highlight'

export default {
  components: {
    SearchHighlight
  },
  data () {
    return {
      currentIdx: 0,
      matchCount: 0,
      keyword: '',
      content: `
            春江花月夜
                [唐] 张若虚
      春江潮水连海平，海上明月共潮生。
      滟滟随波千万里，何处春江无月明！
      江流宛转绕芳甸，月照花林皆似霰；
      空里流霜不觉飞，汀上白沙看不见。
      江天一色无纤尘，皎皎空中孤月轮。
      江畔何人初见月？江月何年初照人？
      人生代代无穷已，江月年年望相似。
      不知江月待何人，但见长江送流水。
      白云一片去悠悠，青枫浦上不胜愁。
      谁家今夜扁舟子？何处相思明月楼？
      可怜楼上月徘徊，应照离人妆镜台。
      玉户帘中卷不去，捣衣砧上拂还来。
      此时相望不相闻，愿逐月华流照君。
      鸿雁长飞光不度，鱼龙潜跃水成文。
      昨夜闲潭梦落花，可怜春半不还家。
      江水流春去欲尽，江潭落月复西斜。
      斜月沉沉藏海雾，碣石潇湘无限路。
      不知乘月几人归，落月摇情满江树。`,
    }
  },

  mounted () {
    for (let key in this.$refs.search) {
      if (!(key in this) && typeof this.$refs.search[key] === 'function') {
        console.log(key)
      }
    }
  },
  methods: {
    searchNext () {
      this.$refs.search.searchNext()
    },
    searchLast () {
      this.$refs.search.searchLast()
    },
    matchCountChange (count) {
      this.matchCount = count
    },
    currentChange (idx) {
      this.currentIdx = idx
    },
    checkKeydown (event) {
      if (event.shiftKey) {
        this.searchLast()
      } else {
        this.searchNext()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-search-highlight
  display flex
.search-highlight-container
  flex auto
  overflow hidden
  display flex
  flex-direction column
  padding 20px
  text-align center
  .header
    flex-shrink 0
    .keyword, .menu
      max-width 20rem
      display flex
      margin 2px auto
      align-items center
      justify-content flex-end
    .keyword
      .label
        flex-shrink 0
        margin-right .5rem
      .input
        flex auto
    .menu
      padding 5px 0
      .button
        margin 0 2px
  .content-container
    flex auto
    overflow auto
    white-space pre-line
    font-size 20px
</style>