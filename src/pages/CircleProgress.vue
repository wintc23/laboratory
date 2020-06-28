<template>
  <div class="page-circle-progress">
    <div class="circle-progress-container">
      <circle-progress class="progress" :progress="progress"></circle-progress>
      <div>
        进度：<InputNumber v-model="progress" type="number" :step="20"/>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgress from '@/components/circle-progress'

export default {
  components: {
    CircleProgress
  },
  data () {
    return {
      progress: 20
    }
  },
  watch: {
    progress: {
      immediate: true,
      handler () {
        console.log(this.progress, this.progress < 0, '~~~~12')
        if (this.progress > 100 || this.progress < 0) {
          this.$nextTick(() => {
            this.progress = 0
          })
        }
        console.log(this.progress, this.progress < 0, '~~~~~34')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-circle-progress
  display flex
  flex-direction column
  &::before, &::after
    content ''
  &::before
    flex-grow 1
  &::after
    flex-grow 4
  .circle-progress-container
    display flex
    align-items center
    flex-direction column
    .progress
      margin 10px

</style>