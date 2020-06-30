// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    controls:false,
    show:true,
    time:true,
    episode:[
      1,2,3,4,5,6,7,8,9,10,11,12
    ],
    teaser:[
      {
        url:'cloud://mini-video-j8ddr.6d69-mini-video-j8ddr-1302364734/传闻中的陈芊芊/[清晰 480P] 【传闻中的陈芊芊】上星了！！！正式改名【西宫】，湖南卫视即将献映__.mp4',
        title:'陈芊芊上星了！！！正式改名【西宫】',
        time:'01:19'
      },
      {
        url:'cloud://mini-video-j8ddr.6d69-mini-video-j8ddr-1302364734/传闻中的陈芊芊/[高清 1080P] 这才是《陈芊芊》的正确打开方式__用湖南卫视的方式打开.mp4',
        title:'这才是《陈芊芊》的正确打开方式',
        time:'02:51'
      }, {
        url:'cloud://mini-video-j8ddr.6d69-mini-video-j8ddr-1302364734/传闻中的陈芊芊/[高清 1080P] 少城主变大当家  醉酒调戏夫君 你怎么才来啊 你看他们的刀 多大的刀啊.mp4',
        title:'少城主变大当家',
        time:'03:36'
      }
    ]

  },
  click() {
    console.log(1)
    this.setData({
      show: !(this.data.show),
    })
  },
hidden(){
  this.setData({
    time:false
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