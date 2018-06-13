import wepy from 'wepy'

export default class toastMixin extends wepy.mixin {
  showToast(title) {
    this.$invoke('toast', 'show', {
      title,
      duration: 2000
    })
  }
}
