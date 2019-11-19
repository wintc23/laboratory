<template>
  <div>
    <div class="tree">
      <tree :treeData="treeData" ref="tree">
        <template v-slot="{ parentData, data, level, nextShow }">
          <div class="node-slot">
            <div class="expand">
              <div class="expand-btn" @click.stop="clickExpand(data, nextShow)" v-if="data.children && data.children.length">
                <Icon type="md-remove" v-if="nextShow"/>
                <Icon type="md-add" v-else/>
              </div>
              <div class="dot" v-else></div>
            </div>
            <div class="slot-content">
              <span class="node-title">{{ data.title }}</span>
              <span class="node-menu-list">
                <Button type="primary" size="small" class="menu" @click.stop="addNode(data)">+下级</Button>
                <Button type="error" size="small" class="menu" @click.stop="deleteNode(parentData, data)">删除</Button>
              </span>
            </div>
          </div>
        </template>
      </tree>
    </div>
  </div>
</template>

<script>
import tree from '@/components/tree/tree'

export default {
  name: 'app',
  components: {
    tree
  },
  data () {
    return {
      treeData: [
        {
          id: '1',
          title: '节点1',
          children: [
            {
              id: '1-1',
              title: '节点1-1'
            },
            {
              id: '1-2',
              title: '节点1-2'
            }
          ]
        },
        {
          id: '2',
          title: '节点2',
          children: [
            {
              id: '2-1',
              title: '节点2-1'
            },
            {
              id: '2-2',
              title: '节点2-2'
            }
          ]
        },
        {
          id: '3',
          title: '节点3'
        }
      ],
      nodeId: 100
    }
  },
  methods: {
    clickExpand (data, nextShow) {
      this.$refs.tree.showChildren(data.id, !nextShow)
    },
    addNode (parentData) {
      let data = {
        id: this.nodeId++,
        title: '新节点'
      }
      if (!parentData.children) this.$set(parentData, 'children', [])
      parentData.children.push(data)
      this.$refs.tree.showChildren(parentData.id, true)
    },
    deleteNode (parentData, data) {
      let children = parentData ? parentData.children : this.treeData
      let idx = children.indexOf(data)
      if (idx !== -1) {
        children.splice(idx, 1)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tree
  margin 20px
  .node-slot
    display flex
    align-items center
    line-height 2
    font-size 20px
    .expand
      flex-shrink 0
      width 20px
      display flex
      align-items center
      justify-content center
      margin-right 2px
      .expand-btn
        font-size 24px
        color #888
        line-height 1
        border-radius 50%
        cursor pointer
      .dot
        border-radius 50%
        border 3px solid #aaa
        width 0
    .slot-content
      flex auto
      padding 0 4px
      &:hover
        background rgba(64, 158, 255, .2)
      .node-title
        vertical-align middle
      .node-menu-list
        font-size 14px
        vertical-align middle
        margin-left 10px
        .menu
          padding 2px 6px
          margin 0 2px
          
</style>
