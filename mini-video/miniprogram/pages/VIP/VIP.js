// pages/VIP/VIP.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade:[
      {
        month:'3个月',
        price:'58',
        paddle:'',
        type:0
      }, {
        month:'6个月',
        price:'108',
        paddle:'',
        type:0
      },  {
        month:'年费',
        price:'198',
        paddle:'',
        type:1
      },  {
        month:'1个月',
        price:'20',
        paddle:'',
        type:0
      }
    ],
    list:[
      {
        img:'https://puui.qpic.cn/vcover_vt_pic/0/eaa7qkjmlecfnp11560158313/220',
        name:'何以为家'
      },   {
        img:'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200q3ctjw01588058720181/220',
        name:'传闻中的陈芊芊'
      },   {
        img:'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200064yp7j1592359852149/220',
        name:'凤归四时歌'
      }
    ],
    privilege:[
      {
        img: "https://puui.qpic.cn/vupload/0/20180802_h6olrx8ak8k/0",
        name: " 并行下载",
        img1: "https://puui.qpic.cn/vupload/0/20180802_hcs3huo3pfi/0",
        name1: " 1080P",
      },
      {
        img: "https://puui.qpic.cn/vupload/0/20181221_vru23f4m80d/0",
        name: " 线下活动",
        img1: "https://puui.qpic.cn/vupload/0/20180802_86r152ithld/0",
        name1: " 广告特权",
      },
      {
        img: "https://puui.qpic.cn/vupload/0/20180802_1k8wtkquc0k/0",
        name: "边下边播",      
          img1: "https://puui.qpic.cn/vupload/0/20180802_nhjbcbgf22c/0",
        name1: " 生日礼包",
      },
      {
        img: "https://puui.qpic.cn/vupload/0/20180802_edbt41mwzfv/0",
        name: "漫画特权",
        img1: "https://puui.qpic.cn/vupload/0/20190904_t632g6el5i/0",
        name1: "话费福利",
      },
      {
        img: "https://puui.qpic.cn/vupload/0/20190527_b7tvudpe4xm/0",
        name: "折扣享大屏",
        img1: "https://puui.qpic.cn/vupload/0/20180802_0mv9htydljq/0",
        name1: "首席体验官",
      },
      {
        img:
          "https://vfiles.gtimg.cn/wupload/vip.vip_system_privilege_detail_online/20200227_1yg7qapu3jwicon1.png",
        name: "超前点播",
        img1: "https://puui.qpic.cn/vupload/0/20180802_9znejs72ev/0",
        name1: "游戏礼包",
      },
      {
        img: "https://puui.qpic.cn/vupload/0/20181221_l89s122apil/0",
        name: "升级礼包",
        img1: "https://puui.qpic.cn/vupload/0/20190527_b7tvudpe4xm/0",
        name1: "折扣享大屏",
      },
    ],
    userImg:'',
    userName:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userImg:options.img,
      userName:options.name
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