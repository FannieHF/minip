import wepy from 'wepy'

export default class navBarMixin extends wepy.mixin {
  data = {
    activeTab: undefined,
    windowWidth: '',
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth: 80
  }

  initNavBar() {
    var that = this
    wepy.getSystemInfo().then(res => {
      that.windowWidth = res.windowWidth
      that.sliderLeft = (res.windowWidth / that.data.tabs.length - that.sliderWidth) / 2
      that.sliderOffset = res.windowWidth / that.data.tabs.length * that.activeTab
    })
  }
  methods ={
    tabClick(e) {
      this.sliderOffset = e.currentTarget.offsetLeft
      this.activeTab = e.currentTarget.id
    },
    switchNav(event) {
      let cur = event.detail.current
      this.activeTab = cur
      this.sliderOffset = this.windowWidth / this.tabs.length * cur
    }
  }
}
