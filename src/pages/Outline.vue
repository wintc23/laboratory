<template>
  <div class="outline">
    <div class="outline-container">
      <div class="config-area">
        <div class="config-item">
          <div class="title">贴入HTML字符串，内容和对应的目录将会渲染在下方</div>
          <Input
            type="textarea"
            :autosize="{
              maxRows: 8
            }"
            v-model="innerHtml"/>
        </div>
        <div class="config-item">
          <div class="title">输入各层级标题的选择器，用英文分号分隔</div>
          <Input v-model="selectorString" />
        </div>
        <div class="config-item">
          <div class="title">排除选择器（不生成目录的选择器）</div>
          <Input v-model="exceptSelector" />
        </div>
      </div>
      <div class="content-container">
        <div class="content-outline">
          <div class="content-outline-inner">
            <div class="title">测试目录</div>
            <outline-tree
              :treeData="treeData"
              class="tree"
              ref="tree">
              <template v-slot:default="{ data }">
                <div
                  class="node-render-content"
                  @click.stop="scrollIntoView(data.el)">
                  <span>{{ data.title }}</span>
                </div>
              </template>
            </outline-tree>
          </div>
        </div>
        <div
          ref="content"
          v-outline="{
            callback: refreshNavTree,
            selectors: selectors,
            exceptSelector
          }"
          class="content">
          <div v-html="innerHtml"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import outline from 'vue-outline'
Vue.use(outline)

export default {
  data () {
    return {
      selectorString: 'h1;h2;h3',
      exceptSelector: '[un-nav]',
      treeData: [],
      selectors: [],
      innerHtml: `<h1>一级标题1</h1>
      <div>两个一级标题之间可能会有很多二级标题，和内容</div>
      <h2>二级标题1-1</h2>
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <h2>二级标题1-2</h2>
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <h2 un-nav>二级标题1-3，这个标题加了un-nav属性不会显示在目录中</h2>
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <h1>一级标题2</h1>
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容

      <h1>一级标题3</h1>
            一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <h1>一级标题4</h1>
            一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      <br />
      一段内容
      `,
    }
  },
  watch: {
    selectorString: {
      immediate: true,
      handler () {
        this.refreshContent()
        let list = this.selectorString.split(';').filter(i => i)
        console.log('list', list)
        this.selectors.splice(0, this.selectors.length, ...list)
      }
    },
    exceptSelector () {
      this.refreshContent()
    }
  },
  methods: {
    refreshNavTree (treeData) {
      this.treeData = treeData
    },
    scrollIntoView (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    },
    refreshContent () {
      this.innerHtml += ' '
    }
  }
}
</script>

<style lang="stylus" scoped>
.outline
  display flex
  .outline-container
    flex auto
    padding 10px
    text-align left
    overflow auto
    display flex
    flex-direction column
    .config-area
      flex-shrink 0
      .config-item + .config-item
        margin-top 10px
    .content-container
      flex auto
      padding 10px
      margin 20px 0
      border-radius 4px
      display flex
      background #eee
      .content-outline
        width 200px
        margin-right 10px
        .content-outline-inner
          position sticky
          top 0
          background #fff
          .title
            border-bottom 1px solid #eee
            padding 5px 10px
            font-size 18px
          .tree
            padding 10px
            .node-render-content
              margin-bottom 5px
              span
                user-select none
                cursor pointer
                &:hover
                  text-decoration underline
                  color #4791ff
      .content
        flex auto
        background #fff
        padding 20px

      
</style>