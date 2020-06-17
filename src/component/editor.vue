<template>
  <section>
    <editor
      v-model="htmlContent"
      tinydrive_dropbox_app_key="xyvo26ey8j9ld4ghzy13v8d0gosyhe8lu97dwfye9epasld0"
      :init="{
        height: 500,
        menubar: true,
        language: 'zh_CN',
        plugins: [
          'image'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat '
      }"
      @onKeyDown="editorChange"
    />
  </section>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    editor: Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      htmlContent: ''
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      this.htmlContent = this.value
    }
  },
  mounted () {
    this.htmlContent = this.value
  },
  methods: {
    editorChange () {
      this.$emit('input', this.htmlContent)
    }
  }
}
</script>
