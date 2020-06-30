// pages/serach/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
        name: "热搜",
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
        name: "明星",
        type: "6"
      }, {
        name: "音乐",
        type: 8
      },
    ],
    active: 0,
    key_list: [{
      num: 1,
      title: "王牌对王牌  第五季",
      status: 0
    },
    {
      num: 2,
      title: "我是余欢水",
      status: 2
    },
    {
      num: 3,
      title: "传闻中的陈芊芊",
      status: 1
    },
    {
      num: 4,
      title: "安家",
      status: 0
    },
    {
      num: 5,
      title: "如懿传",
      status: 2
    },
    {
      num: 6,
      title: "冰糖炖雪梨",
      status: 1
    },
    {
      num: 7,
      title: "大鱼",
      status: 2
    },
    {
      num: 8,
      title: "小猪佩奇 第一季",
      status: 2
    },
    {
      num: 9,
      title: "极限挑战 第二季",
      status: 1
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 2
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 1
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 1
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 0
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 2
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 1
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 2
    },
    {
      num: 10,
      title: "三生三世枕上书",
      status: 1
    },
  ]
  },
  go() {
    wx.switchTab({
      url: '../index/index',
    })
  },
  gettype(e){
      this.setData({
        active: e.currentTarget.dataset.type
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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