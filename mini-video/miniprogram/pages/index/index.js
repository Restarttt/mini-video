// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
        name: "精选",
        type: 0
      },
      {
        name: "电视剧",
        type: 2
      },
      {
        name: "VIP",
        type: -1
      },
      {
        name: "电影",
        type: 1
      },
      {
        name: "综艺",
        type: 3
      },
      {
        name: "动漫",
        type: 4
      },
      {
        name: "少儿",
        type: ""
      },
      {
        name: "艺术",
        type: 5
      },
      {
        name: "战疫情",
        type: "6"
      }
    ],
    active:3,
    all: [],
    autoplay: true,
    duration: 300,
  },
  gettype(e) {
    console.log(e.currentTarget.dataset.type)
    this.setData({
      active: e.currentTarget.dataset.type
    })
    wx.request({
      url: 'https://www.shuipingguo.com/getvideo', //请求接口的url
      method: 'GET', //请求方式
      data: {
        type: this.data.active
      }, //请求参数格式为json
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data.data)
        this.setData({
          all: res.data.data,
          // arr：
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'https://www.shuipingguo.com/getvideo', //请求接口的url
      method: 'GET', //请求方式
      data: {
        type: this.data.active
      }, //请求参数格式为json
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data.data)
        this.setData({
          all: res.data.data,
          // arr：
        })
      }
    });
    
  },
  go() {
    wx.navigateTo({
      url: '../serach/search',
    })
  },
  go_detail(e) {
    console.log(e)
    wx.navigateTo({
      url: '../detail/detail',
    })
    wx.cloud.callFunction({
      name: 'history',
      data: {
        item: e.currentTarget.dataset.item,
        name: e.currentTarget.dataset.item.name,
        action: 'uplist'
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  onLoad: function (options) {
    wx.request({
      url: 'https://www.shuipingguo.com/getvideo', //请求接口的url
      method: 'GET', //请求方式
      data: {
        type: this.data.active
      }, //请求参数格式为json
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data.data)
        this.setData({
          all: res.data.data,
          // arr：
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'https://www.shuipingguo.com/getvideo', //请求接口的url
      method: 'GET', //请求方式
      data: {
        type: this.data.active
      }, //请求参数格式为json
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data.data)
        this.setData({
          all: res.data.data,
          // arr：
        })
      }
    });
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