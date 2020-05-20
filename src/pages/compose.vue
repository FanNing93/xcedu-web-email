<template>
  <section class="layout-list-content padding-nomal">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="100px"
      style="width: 1000px; margin: 0 auto"
      @submit.native="submitForm"
    >
      <el-form-item label="收件人" prop="sendName">
        <chooseUser />
      </el-form-item>
      <el-form-item label="主题" prop="title">
        <el-input v-model="form.title" placeholder="不超过20个字符" maxlength="20" show-word-limit />
      </el-form-item>
      <el-form-item label="优先级">
        <el-radio-group v-model="form.emergency">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">发送</el-button>
        <el-button @click="resetForm('form')">保存草稿</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import { createEmail, updateEmail, getEmailById } from '@/api/index'
import chooseUser from '@/component/chooseUser'
export default {
  components: {
    chooseUser
  },
  data () {
    return {
      form: {
        name: 'test',
        sendName: '',
        title: '',
        emergency: 1
      },
      rules: {
        sendName: [
          { required: true, message: '请输入收件人', trigger: 'change' }
        ],
        title: [
          { required: true, message: '请输入主题, 不超过20个字符', trigger: 'change' }
        ]
      }
    }
  },
  mounted: function () {
    const id = this.$route.query.id
    if (id) {
      // 修改
      getEmailById(id).then(res => {
        this.form = res
      })
    } else {
      this.form = {
        name: 'test',
        sendName: '',
        title: '',
        emergency: 1
      }
    }
  },
  methods: {
    submitForm () {
      // console.log('submit!')
      if (this.$route.query.id) {
        updateEmail(this.form).then(res => {
          if (res) {
            this.$message('修改成功')
            this.$router.push({ name: 'msgLlist', params: { viewname: 'receiving' } })
          } else {
            this.$message(res)
          }
        })
      } else {
        createEmail(this.form).then(res => {
        // console.log(res)
          if (res) {
            this.$message('发送成功')
            this.$router.push({ name: 'msgLlist', params: { viewname: 'receiving' } })
          } else {
            this.$message('发送失败')
          }
        })
      }
    },
    resetForm () {
      // console.log('submit!')
    }
  }
}
</script>
