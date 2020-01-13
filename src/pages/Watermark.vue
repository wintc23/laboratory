<template>
  <div>
    <div class="action">
      <Input placeholder="水印内容" />
      <Button></Button>

    </div>
    <div class="preview">
      <img >
    </div>
  </div>
</template>

<script>
export default {
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
      ctx.drawImage(img)
      return canvas
    },

    watermark (canvas, text) {
      return new Promise((resolve, reject) => {
        let ctx = canvas.getContext('2d')
        ctx.font = "16px"
        ctx.strokeStyle = "#f2f2f2"
        ctx.fillText(text)
        canvas.toBlob(blob => resolve(blob))
      })
    }

  }
}
</script>