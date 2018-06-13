import wepy from 'wepy'
import { service } from '../config.js'

export default class formMixin extends wepy.mixin {
  data = {
    priors: [ 'A0', 'A1', 'A2' ],
    charLenMax: 500,
    restCharLen: 500 // content最大数目
  }

  switchAll(bool) {
    for (let entity in this.change) {
      this.change[entity] = bool
    }
  }

  methods = {
    isAdd() {
      return Boolean(this.func === 'add')
    },
    isUpdate() {
      return Boolean(this.func === 'update')
    },
    bindInput(e) {
      this.formAttr[e.currentTarget.id] = e.detail.value
      if (e.currentTarget.id === 'content') {
        this.restCharLen = this.charLenMax - e.detail.value.length
      }
      if (e.currentTarget.id === 'description') {
        this.restCharLen = this.charLenMax - e.detail.value.length
      }
    },
    checkboxChange(e) {
      let checkboxItems = this.owners
      let values = e.detail.value
      for (let i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false

        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].id === values[j]) {
            checkboxItems[i].checked = true
            break
          }
        }
      }
      this.owners = checkboxItems

      this.formAttr.relatedUsers = []
      for (let i = 0, lenI = values.length; i < lenI; ++i) {
        this.formAttr.relatedUsers.push({
          id: e.detail.value[i]
        })
      }
    },
    bindPickerChange(e) {
      if (e.currentTarget.id === 'priority') {
        this.formAttr.priority = parseInt(e.detail.value) + 1
      } else if (e.currentTarget.id === 'type') {
        this.formAttr.type = parseInt(e.detail.value) + 1
      } else {
        this.formAttr[e.currentTarget.id] = e.detail.value
      }
    },
    changeStatus() {
      let status = this.formAttr.status
      if (status === 2) status += 1
      status += 1
      wepy.request({
        url: service.changeStatus + this.itemId + '/status/' + status,
        data: {
          modifier: wepy.getStorageSync('user').id
        },
        method: 'PUT',
        header: wepy.$instance.globalData.header
      }).then(({data}) => {
        if (data.status === 0) {
          wepy.navigateBack({
            delta: 1
          })
        } else {
          this.showToast(data.msg)
        }
      })
    },
    enable(e) {
      this.change[e.currentTarget.id] = false
    }
  }
}
