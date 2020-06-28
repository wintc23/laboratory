<template>
  <div
    :style="{
      width: size,
      height: size
    }"
    class="progress-container">
    <svg :viewBox="`0 0 ${svgWidth} ${svgWidth}`">
      <path
        :d="backPath"
        fill="none"
        :stroke-width="lineWidth"
        stroke="#d5d5d6">
      </path>
      <path
        class="path"
        :d="path"
        fill="none"
        :stroke-width="lineWidth"
        stroke-linecap="round"
        :style="{
          'stroke-dasharray': dashArray,
        }"
        stroke="red">
      </path>
    </svg>
    <div
      class="inner-content">
      <slot>
        {{ progressText }}
      </slot>
    </div>
  </div>
</template>

<script>
const LINE_WIDTH = 4
const SVG_WIDTH = 100

export default {
  props: {
    progress: {
      type: Number,
      default: 50
    },
    size: {
      type: String,
      default: '100px'
    }
  },
  computed: {
    lineWidth () {
      return LINE_WIDTH
    },
    svgWidth () {
      return SVG_WIDTH
    },
    radius () {
      return (this.svgWidth - this.lineWidth) / 2
    },
    fixedProgress () {
      return Math.max(Math.min(100, this.progress), 0)
    },
    progressText () {
      return this.fixedProgress + '%'
    },
    deg () {
      return 2 * Math.PI * (this.fixedProgress - 0.1) / 100
    },
    backPath () {
      let sx = this.svgWidth / 2, sy = this.lineWidth / 2
      let dx = this.svgWidth - this.lineWidth / 2, dy = this.svgWidth / 2
      let r = this.radius
      return `M ${sx} ${sy} A ${r} ${r} 0 0 1 ${dx} ${dy} A ${r} ${r} 0 1 1 ${sx} ${sy}`
    },
    path () {
      let r = this.radius
      let sx = this.svgWidth / 2, sy = this.lineWidth / 2
      let dx = this.svgWidth / 2 + Math.sin(this.deg) * r
      let dy = this.svgWidth / 2 - Math.cos(this.deg) * r
      let arc = this.fixedProgress > 50 ? 1 : 0
      return `M ${sx} ${sy} A ${r} ${r} 0 ${arc} 1 ${dx} ${dy}`
    },
    dashArray () {
      let ratio = this.fixedProgress / 100
      let c = Math.PI * 2 * this.radius
      return `${c * ratio / this.svgWidth * 100}, ${c * (1 - ratio) / this.svgWidth * 100}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.progress-container
  position relative
  .inner-content
    position absolute
    left 5%
    right 5%
    top 5%
    bottom 5%
    z-index 2
    display flex
    align-items center
    justify-content center
.path
  transition stroke-dasharray .4s ease

</style>