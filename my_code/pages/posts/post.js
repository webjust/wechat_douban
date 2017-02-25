var booksData = require("../../db/data.js");

Page(
    {
        data: {

        },

        onLoad: function (options) {
            // console.log("onload");

            this.setData({
                posts_key: booksData.postList
            })

        },

        onReady: function () {
            // console.log("onReady");
        },

        onShow: function () {
            // console.log("onShow");
        },

        detailTap: function (event) {
            // 通过自带的event对象获取里面的bookId
            var bookId = event.currentTarget.dataset.bookId;

            // 跳转
            wx.navigateTo({
                url: 'detail/detail?id=' + bookId
            })
        }
    }
)