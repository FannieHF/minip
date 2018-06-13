import wepy from 'wepy'
import { service } from '../config.js'

export default class baseMixin extends wepy.mixin {
   // 负责人和相关人

  async getOwners() {
    return wepy.request({
      url: service.getAllMembers,
      header: wepy.$instance.globalData.header,
      method: 'GET'
    }).then(({data}) => {
      if (data.status === 0) {
        wepy.$instance.globalData.owners = data.value
        return data.value
      } else {
      }
    })
  }

  // leaders
  getLeaders() {
    return wepy.request({
      url: service.getAllLeaders,
      header: wepy.$instance.globalData.header,
      method: 'GET'
    }).then(({data}) => {
      if (data.status === 0) {
        wepy.$instance.globalData.leaders = data.value
        return data.value
      } else {
      }
    })
  }
}
