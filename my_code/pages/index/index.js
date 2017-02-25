Page(
    {
        data: {

        },

        // 响应进入按钮的tap事件函数
        onTap: function () {
            // 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。执行生命周期函数 onHide
            wx.navigateTo({
                url: '../posts/post'
            })

            // 关闭当前页面，跳转到应用内的某个页面。执行生命周期函数 onUnload
            // wx.redirectTo({
            //     url: '../posts/post'
            // })
        },

        // 页面卸载
        onUnload: function() {
            console.log("Welcome page is onUnload")
        },

        // 页面隐藏
        onHide: function() {
            console.log("Welcome page is onHide")
        }
    }
)