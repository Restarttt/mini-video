// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userImg:'../../images/icon/girl.png',
    toggle:true

  },
  // h获取用户信息
go_set(){
  wx.navigateTo({
    url: '../set/set',
  })
},
go_history(){
  wx.navigateTo({
    url: '../history/history',
  })
  },
  go_vip(e){
    console.log(e.currentTarget.dataset)
     let info=e.currentTarget.dataset.img
     let name=e.currentTarget.dataset.name
    wx.navigateTo({
      url: '../VIP/VIP?'+'img='+ info+'&'+ 'name='+name
    })
  },
  onGotUserInfo() {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              let userName = res.userInfo.nickName
              let userImg = res.userInfo.avatarUrl
              this.setData({
                userName: userName,
                userImg: userImg,
                toggle: false,
                show: true,
                toggle:false
              })
              console.log(res.userInfo.nickName)
              console.log(res.userInfo)
            }
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2222,
            mask: true
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              let userName = res.userInfo.nickName
              let userImg = res.userInfo.avatarUrl
              this.setData({
                userName: userName,
                userImg: userImg,
                toggle: false,
                show: true,
                toggle:false
              })
            }
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2222,
            mask: true
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})