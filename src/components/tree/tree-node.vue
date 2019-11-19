<template>
  <div class="tree-node-container">
    <node-content></node-content>
    <div
      class="tree-node-children"
      :style="{
        paddingLeft: indent
      }"
      v-if="nextShow">
      <tree-node
        v-for="(child, idx) of nodeData.children"
        :nodeData="child"
        :indent="indent"
        :key="idx">
      </tree-node>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tree-node',
  props: {
    nodeData: {
      type: Object,
      required: true
    }
  },
  components: {
    'node-content': {
      render (h) {
        let slot = this.$parent.tree.$scopedSlots.default
        let { nodeData, parentData, level, nextShow } = this.$parent
        return (slot ? slot({ parentData, data: nodeData, level, nextShow }) : '<div>未定义插槽内容</div>')
      }
    }
  },
  data () {
    return {
      tree: false,
      level: 0,
      parentData: null,
      childrenShow: true,
      indent: undefined
    }
  },
  computed: {
    nextShow () {
      return this.nodeData.children && this.nodeData.children.length && this.childrenShow
    }
  },
  created () {
    let parent = this.$parent
    if (parent.isTree) {
      this.level = 1
    } else {
      this.level = parent.level + 1
      this.parentData = parent.nodeData
    }
    while (parent && !parent.isTree) {
      parent = parent.$parent
    }
    this.tree = parent
    this.indent = this.tree.indent
    this.tree.registerNodeComponent(this.nodeData.id, this)
  },
  beforeDestroy () {
    this.tree.removeNodeComponent(this.nodeData.id)
  },
  methods: {
    showChildren (show) {
      this.childrenShow = show
    }
  }
}
</script>