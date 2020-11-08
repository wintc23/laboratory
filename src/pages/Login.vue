<template>
  <div v-show="show">
      <!-- 登录框 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      resolve: null,
      reject: null,
      show: false
    }
  },
  methods: {
    showModal () {
      return new Promise((resolve, rejcet) => {
        this.show = true
        this.resolve = resolve
        this.reject = reject
      })
    },
    hideModal () {
      this.show = false
      this.reject = null
      this.resolve = null
      this.username = ''
      this.password = ''
    },
    success () {
      this.hideModal()
      this.resolve && this.resolve()
    },
    fail () {
      this.hideModal()
      this.reject && this.reject()
    }
  }
}

</script>