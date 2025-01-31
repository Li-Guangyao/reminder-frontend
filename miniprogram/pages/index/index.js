Page({
    data: {
      showModal: false,
      subscribed: false
    },
  
    onLoad: function () {
      // 检查用户是否已授权接收订阅消息
      wx.getSetting({
        withSubscriptions: true,
        success: (res) => {
          if (res.subscriptionsSetting.mainSwitch) {
            this.setData({
              subscribed: true
            })
          } else {
            this.setData({
              showModal: true
            })
          }
        }
      })
    },
  
    requestSubscription() {
      wx.requestSubscribeMessage({
        tmplIds: ['template_id_here'],
        success: () => {
          this.setData({
            showModal: false,
            subscribed: true
          })
        },
        fail: (err) => {
          console.error('订阅消息失败:', err)
        }
      })
    },
  
    closeModal() {
      this.setData({
        showModal: false
      })
    }
  })