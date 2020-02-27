<template>
  <div class="watermark">
    <div class="watermark-container">
      <div class="action">
        <Input placeholder="水印内容" v-model="text"/>
        <Button class="btn" type="primary" size="small" @click.stop="chooseImage">选择图片</Button>
      </div>
      <div class="preview" ref="preview">
        <div class="first" ref="first"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '图片添加水印-木马啊'
    }
  },
  methods: {
    blobToImg (blob) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.addEventListener('load', () => {
          let img = new Image()
          img.src = reader.result
          img.addEventListener('load', () => resolve(img))
        })
        reader.readAsDataURL(blob)
      })
    },

    imgToCanvas (img) {
      let canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      return canvas
    },

    watermark (canvas, text) {
      return new Promise((resolve, reject) => {
        let ctx = canvas.getContext('2d')
        // 设置字号和字体
        ctx.font = "24px 宋体"
        // 设置
        ctx.fillStyle = "#FFC82C"
        // 设置右对齐
        ctx.textAlign = 'right'
        // 在指定位置绘制文字
        ctx.fillText(text, canvas.width - 20, canvas.height - 20)
        canvas.toBlob(blob => resolve(blob))
      })
    },

    chooseImage () {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.onchange = async () => {
        let img = await this.blobToImg(input.files[0])
        let canvas = this.imgToCanvas(img)
        let blob = await this.watermark(canvas, this.text)
        let newImage = await this.blobToImg(blob)
        this.$refs.preview.insertBefore(newImage, this.$refs.preview.firstChild)
      }
      input.click()
    }
  }
}
</script>

<style lang="stylus" scoped>
.watermark-container
  max-width 100vw
  width 400px
  margin 60px auto
  .action
    display flex
    align-items center
    .btn
      margin-left 10px
  .preview
    margin-top 20px
    min-height 100px
    background #f9f9f9
    >>> img
      max-width 100%
</style>