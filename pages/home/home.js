// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/home-1.jpg',
      '../../images/home-2.jpg',
      '../../images/home-3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    homeNoticeImg: '../../images/home-notice.png',
    curTab: 0,
    current: 0,
    tabList: [{id: 1,name: "热门端游"},{id: 2,name: "热门手游"}],
    homehuodong: "../../images/home-huodong.png",
    recommends1: [{
      "name": "英雄联盟2",
      "id": "1",
      "pic_url": '../../images/home-recommend-1.png'
    },
    {
      "name": "穿越火线2",
      "id": "2",
      "pic_url": '../../images/home-recommend-2.jpg'
    },
    {
      "name": "王者荣耀2",
      "id": "3",
      "pic_url": '../../images/home-recommend-3.jpg'
    },
    {
      "name": "使命召唤2",
      "id": "4",
      "pic_url": '../../images/home-recommend-4.png'
    },
    {
      "name": "极品飞车2",
      "id": "5",
      "pic_url": '../../images/home-recommend-5.jpg'
    },
    {
      "name": "王者荣耀2",
      "id": "6",
      "pic_url": '../../images/home-recommend-6.jpg'
    },
    {
      "name": "绝地求生2",
      "id": "7",
      "pic_url": '../../images/home-recommend-7.jpg'
    },
    {
      "name": "QQ炫舞2",
      "id": "8",
      "pic_url": '../../images/home-recommend-8.jpg'
    }
    ]
  },
  btn(e) {
    console.log(e.currentTarget.dataset.index)

  },

  selectTab(e) {
    let index = e.target.dataset.index;
    this.setData({
      curTab: index,
      current: index,
      recommends: this.data.recommends1
    })

  },
  swiperChange(e) {
    console.log(e)
    let index = e.detail.current;
    this.setData({
      curTab: index,
      current: index,
      recommends: this.data.recommends1
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("1111111="+options)
    this.setData({
      recommends: this.data.recommends1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("22222=" +"options")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})