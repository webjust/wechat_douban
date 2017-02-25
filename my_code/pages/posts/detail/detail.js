var booksData = require("../../../db/data.js");
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    // 获取列表的id
    var bookId = options.id;
    var bookInfo = booksData.postList[bookId];

    // 数据绑定
    this.setData({
      bookDetail: bookInfo,
      bookId: bookId
    })

    // 测试本地缓存
    // wx.setStorageSync('key', "xdl");

    // 通过缓存，保存是否给某本书点赞
    var likeBooklist = wx.getStorageSync('like_list');

    // 判断一个新用户，如果本地没有缓存保存过点赞数，则默认生成一个缓存对象保存点赞数，且为false，否则会报错
    if (likeBooklist) {
      var bookLikedStatus = likeBooklist[bookId]
    }
    else {
      var likeBookId = {}
      likeBookId[bookId] = false;
      wx.setStorageSync('like_list', likeBookId);
      var likeBooklist = wx.getStorageSync('like_list');
    }

    console.log(likeBooklist);

    this.setData({
      likeBooklist: likeBooklist,
      bookLikedStatus: bookLikedStatus
    })
  },

  shareTap: function () {

    var that = this;
    var curId = that.data.bookId;
    // console.log(curId);

    // 通过缓存保存点赞的状态
    // 获取当前选择的书的点赞状态
    var thisBookLiked = that.data.likeBooklist[curId];

    // 获取全部书的点赞状态对象
    var likeBooklist = that.data.likeBooklist;
    // console.log(thisBookLiked);
    // console.log(likeBooklist);

    // 判断是否点过赞了，如果已经点赞了，提示您已经点赞了，否则取反，并且把修改后的状态值，使用缓存的方式存储到对象中
    if (thisBookLiked) {
      wx.showToast({
        title: '您已经点赞了',
        icon: 'warn',
        duration: 2000
      })

    } else {
      var likeBookStatus = true;
      console.log(curId);
      console.log(likeBookStatus);
      console.log(likeBooklist);
      likeBooklist[curId] = likeBookStatus;
      // console.log(likeBooklist);

      // wx.setStorage('like_list', likeBooklist)

      // 使用了微信提供的API界面交互反馈功能。
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })

      // 使用异步更新的success方法实现修改绑定的状态值，这样可以实时的显示修改状态后的图片
      wx.setStorage({
        key: 'like_list',
        data: likeBooklist,
        success: function (res) {
          that.setData({
            bookLikedStatus: true
          })
        }
      });

    }

  }
})