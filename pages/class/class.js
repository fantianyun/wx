// pages/class/class.js
const itemClass = ['xinpin','zhongchou','shouji','dianshi','diannao'];
let itemClassTop = [];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'toClassView':'xinpin',
    'toItemsView':'l_xinpin',
    'bgcolors':{},
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
      let me = this;
      for (let i = 0; i<itemClass.length;i++){
        let query = wx.createSelectorQuery();
        query.select('#l_'+itemClass[i]).boundingClientRect();
        query.selectViewport().scrollOffset();
        query.exec((res) => {
          let top = res[0].top; 
          let id = res[0].id;
          itemClassTop.push({ id, top });
        })
      }
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

  },
  classScroll(e){
    // console.log(e.detail.scrollTop);
    let scrollTop = e.detail.scrollTop;
    for(let i=0;i<itemClassTop.length;i++){
      if (scrollTop >= itemClassTop[i].top && scrollTop<= itemClassTop[i+1].top){
        let classId = itemClassTop[i].id.substr(2);
        this.setData({
          bgcolors: {[classId] : 'red' }
        });
       
      }
    }
  },
  classClick(e){
    console.log(e);
    if (e.target.id != this.data.toClassView || e.target.id ==='xinpin'){
      this.setData({
        toItemsView:'l_'+e.target.id,
        bgcolors: { [e.target.id]: 'red'}
      })
     console.log(this.data.bgcolors)
    }
  },
  navItemDeatailPage(){
    wx.navigateTo({
      url: 'itemdetail/itemdetail'
    })
  }
})