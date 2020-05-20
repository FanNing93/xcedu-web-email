<template>
  <section>
    <el-input v-model="selectedValue" placeholder="请输入内容">
      <el-button slot="append" @click.native="chooseUser">...</el-button>
    </el-input>
    <el-dialog
      title="选择成员对象"
      :visible.sync="dialogVisible"
      width="1000"
    >
      <!-- <span>这是一段信息</span> -->
      <div class="choose-selector">
        <el-tabs v-model="activeName">
          <el-tab-pane label="组织" name="org">
            <div class="choose-selector-select-container">
              <el-input
                v-model="orgSearchValue"
                placeholder="快速查找组织和人"
              >
                <i slot="prefix" class="el-input__icon el-icon-search" />
              </el-input>
              <tree :nodes="orgNodes" :setting="setting" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="群组" name="group">
            <div class="choose-selector-select-container">
              <el-input
                v-model="groupSearchValue"
                placeholder="快速查找组织和人"
              >
                <i slot="prefix" class="el-input__icon el-icon-search" />
              </el-input>
              <tree :nodes="orgNodes" :setting="setting" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的群组" name="my">
            <div class="choose-selector-select-container">
              <el-input
                v-model="myGroupSearchValue"
                placeholder="快速查找组织和人"
              >
                <i slot="prefix" class="el-input__icon el-icon-search" />
              </el-input>
              <tree :nodes="myGroupNodes" :setting="setting" />
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="choose-selector-selected-container">
          <el-input
            v-model="selectedSearchValue"
            placeholder="快速查找"
          >
            <i slot="prefix" class="el-input__icon el-icon-search" />
          </el-input>
          <div>
            <p>
              <span><i class="icon-org-manage" /><em>宣会</em></span><i class="icon-close-x" />
            </p>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
import tree from 'vue-giant-tree'
export default {
  components: { tree },
  data () {
    return {
      selectedValue: '',
      dialogVisible: false,
      orgNodes: [
        { id: 1, pid: 0, name: '随意勾选 1' },
        { id: 11, pid: 1, name: '随意勾选 1-1' },
        { id: 111, pid: 11, name: '随意勾选 1-1-1' },
        { id: 112, pid: 11, name: '随意勾选 1-1-2' },
        { id: 12, pid: 1, name: '随意勾选 1-2' },
        { id: 121, pid: 12, name: '随意勾选 1-2-1' },
        { id: 122, pid: 12, name: '随意勾选 1-2-2' },
        { id: 2, pid: 0, name: '随意勾选 2' },
        { id: 21, pid: 2, name: '随意勾选 2-1' },
        { id: 22, pid: 2, name: '随意勾选 2-2' },
        { id: 221, pid: 22, name: '随意勾选 2-2-1' },
        { id: 222, pid: 22, name: '随意勾选 2-2-2' },
        { id: 23, pid: 2, name: '随意勾选 2-3' }
      ],
      groupNodes: [],
      myGroupNodes: [],
      activeName: 'org',
      setting: {
        check: {
          enable: true,
          chkboxType: {
            Y: '',
            N: ''
          }
        },
        data: {
          simpleData: {
            enable: true,
            pIdKey: 'pid'
          }
        },
        view: {
          showIcon: false,
          addHoverDom: this.addHoverDom,
          removeHoverDom: this.removeHoverDom
        }
      },
      orgSearchValue: '',
      groupSearchValue: '',
      myGroupSearchValue: '',
      selectedSearchValue: ''
    }
  },
  methods: {
    chooseUser () {
      this.dialogVisible = true
    }
  }
}
</script>
